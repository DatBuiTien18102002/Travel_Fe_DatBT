import { Button, Form, Input, InputNumber, Select, Space, Upload } from "antd";
import { useEffect, useState } from "react";
import { UploadOutlined } from "@ant-design/icons";
import type { UploadFile } from "antd";
import { RcFile } from "antd/es/upload";
import getBase64 from "@/utils/getBase64";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import { responseType, tourAdminForm, tourType } from "@/types/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { tourAdminSchema } from "@/forms/validateSchemas";
import { FormItem } from "react-hook-form-antd";
import TextArea from "antd/es/input/TextArea";
import NestedDescTourForm from "@/forms/NestedDescTourForm";
import { MultiDatePicker } from "@/components";
import {
  useCreateTour,
  useGetDetailTour,
  useUpdateTour,
} from "@/react-query/tourQuery";
import message from "@/utils/message";
import { useNavigate, useParams } from "react-router-dom";
import { ErrorMessage } from "@hookform/error-message";

interface CustomError extends Error {
  response?: {
    data?: {
      err?: string;
    };
  };
}

const TourAdminForm = ({ type }: { type: string }) => {
  const [photo, setPhoto] = useState("");
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [transport, setTransport] = useState("Máy bay");
  const { id } = useParams();
  const { data: res } = useGetDetailTour(id || "");

  const tourDetail: tourType = res?.data as tourType;
  const {
    mutateAsync: createTour,
    isPending: loadingCreate,
    error: createError,
  } = useCreateTour();

  const {
    mutateAsync: updateTour,
    isPending: loadingUpdate,
    error: updateError,
  } = useUpdateTour();

  const defaultValues = {
    name: tourDetail?.name || "",
    price: tourDetail?.price || undefined,
    discount: tourDetail?.discount || 0,
    maxSeat: tourDetail?.maxSeat || undefined,
    depart: tourDetail?.depart || "",
    destination: tourDetail?.destination || "",
    dateStart: tourDetail?.dateStart || [],
    timeTravel: tourDetail?.timeTravel || "",
    desc: tourDetail?.desc || {
      introduce: "",
      overview: "",
      topic: "",
    },
    schedule: tourDetail?.schedule || [
      {
        title: "",
        desc: [
          {
            timeOfDate: "",
            detail: "",
          },
        ],
      },
    ],
  };

  const formReactHook = useForm<tourAdminForm>({
    defaultValues,
    resolver: zodResolver(tourAdminSchema),
  });

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = formReactHook;

  const createTourError: CustomError = createError as CustomError;
  const updateTourError: CustomError = updateError as CustomError;

  useEffect(() => {
    setPhoto(tourDetail?.photo || "");
    reset(defaultValues);
  }, [res, reset]);

  useEffect(() => {
    if (
      (createTourError &&
        createTourError?.response?.data?.err?.startsWith(
          'The value of "offset" is out of range.'
        )) ||
      (updateTourError &&
        updateTourError?.response?.data?.err?.startsWith(
          'The value of "offset" is out of range.'
        ))
    ) {
      message(
        "error",
        "Hình ảnh có kích thước quá lớn, vui lòng chọn ảnh khác"
      );
    }
  }, [createError, updateError]);

  const {
    fields: scheduleFields,
    append: appendSchedule,
    remove,
  } = useFieldArray({
    control,
    name: "schedule",
  });

  const handleCreateTour = async (values: tourAdminForm) => {
    const tourInfo = {
      ...values,
      photo,
      transport,
      availableSeat: values.maxSeat,
    } as tourType;

    const res: responseType<tourType> = await createTour(tourInfo);

    if (res.message) {
      const status = res.status.toString();
      if (status === "200") {
        message("success", res.message);
        navigate("/admin/manager-tour");
      } else {
        message("error", res.message);
      }
    }
  };

  const handleUpdateTour = async (values: tourAdminForm) => {
    const tourInfo = {
      ...values,
      photo,
      transport,
    } as tourType;

    if (!id) {
      return;
    }

    const res: responseType<tourType> = await updateTour({
      id,
      data: tourInfo,
    });

    if (res.message) {
      const status = res.status.toString();
      if (status === "200") {
        message("success", res.message);
        navigate("/admin/manager-tour");
      } else {
        message("error", res.message);
      }
    }
  };

  const handleSubmitForm = async (values: tourAdminForm) => {
    if (type === "create") {
      await handleCreateTour(values);
    } else {
      await handleUpdateTour(values);
    }
  };

  const handleChangeAvatar = async ({
    fileList,
  }: {
    fileList: UploadFile<RcFile>[];
  }) => {
    const file = fileList[0];
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as RcFile);
    }

    setPhoto(file.preview || "");
  };

  const beforeUpload = () => {
    return false;
  };

  const handleChange = (value: string) => {
    setTransport(value);
  };

  return (
    <div className="wrapper my-[30px] max-w-[1200px] ">
      <div className="mx-auto text-4xl font-signikaBold text-sky">
        Tạo tour du lịch
      </div>

      <div className="mt-[20px]">
        <Form
          onFinish={handleSubmit(handleSubmitForm)}
          className="w-full"
          form={form}
          size="large"
          layout="vertical"
        >
          <div className="flex gap-4">
            <div className="flex flex-col  w-[55%]">
              <FormItem
                label={<label className="label-form">Tên tour:</label>}
                control={control}
                name="name"
              >
                <Input />
              </FormItem>
              <FormItem
                label={<label className="label-form">Giá tour:</label>}
                control={control}
                name="price"
              >
                <InputNumber className="w-full" min={0} />
              </FormItem>
              <FormItem
                label={<label className="label-form">Giảm giá</label>}
                control={control}
                name="discount"
              >
                <InputNumber className="w-full" min={0} />
              </FormItem>
              <FormItem
                label={<label className="label-form">Số người:</label>}
                control={control}
                name="maxSeat"
              >
                <InputNumber className="w-full" min={0} />
              </FormItem>
            </div>

            <div className="flex flex-col w-[45%] gap-4 custom-avatar-antd">
              <div className="w-full rounded-[5px] overflow-hidden h-[320px]">
                <img src={photo ? photo : "/tour_img_default.jpg"} alt="" />
              </div>

              <div className="custom-admin-upload">
                <Upload
                  onChange={handleChangeAvatar}
                  maxCount={1}
                  beforeUpload={beforeUpload}
                  className="w-full"
                >
                  <Button icon={<UploadOutlined />} className="w-full">
                    Click to Upload
                  </Button>
                </Upload>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-[40%] flex flex-col">
              <FormItem
                label={<label className="label-form">Điểm khởi hành:</label>}
                control={control}
                name="depart"
              >
                <Input />
              </FormItem>
              <FormItem
                label={<label className="label-form">Điểm đến:</label>}
                control={control}
                name="destination"
              >
                <Input />
              </FormItem>
              <div className="label-form mb-[8px]">Ngày khởi hành</div>

              <Controller
                name="dateStart"
                control={control}
                render={({ field }) => (
                  <>
                    <MultiDatePicker
                      defaultData={tourDetail?.dateStart}
                      onDatesChange={(dates) => field.onChange(dates)}
                      error={errors?.dateStart?.message || ""}
                    />
                    <div className="text-[#FF4D4F] h-[26px]">
                      <ErrorMessage
                        errors={errors}
                        name="dateStart"
                        render={({ message }) => <p>{message}</p>}
                      />
                    </div>
                  </>
                )}
              />

              <FormItem
                label={<label className="label-form">Thời gian du lịch:</label>}
                control={control}
                name="timeTravel"
              >
                <Input />
              </FormItem>
              <div>
                <div className="label-form mb-2">Phương tiện di chuyển:</div>
                <Select
                  defaultValue="Máy bay"
                  style={{ width: "100%" }}
                  onChange={handleChange}
                  options={[
                    { value: "Máy bay", label: "Máy bay" },
                    { value: "Tàu thủy", label: "Tàu thủy" },
                    { value: "Tàu hỏa", label: "Tàu hỏa" },
                    { value: "Xe buýt du lịch", label: "Xe buýt du lịch" },
                  ]}
                />
              </div>
            </div>
            <div className="w-[60%] flex flex-col">
              <FormItem
                label={<label className="label-form">Giới thiệu tour:</label>}
                control={control}
                name="desc.introduce"
              >
                <TextArea style={{ height: 140, resize: "none" }} />
              </FormItem>
              <FormItem
                label={<label className="label-form">Tổng quan tour:</label>}
                control={control}
                name="desc.overview"
              >
                <TextArea style={{ height: 140, resize: "none" }} />
              </FormItem>
              <FormItem
                label={<label className="label-form">Chủ đề tour:</label>}
                control={control}
                name="desc.topic"
              >
                <Input />
              </FormItem>
            </div>
          </div>

          <div className="w-full">
            <div className="mb-[8px] flex justify-between items-center">
              <label className="label-form">Lịch trình</label>
            </div>
            <Form.Item>
              {scheduleFields.map((scheduleItem, scheduleIndex) => {
                return (
                  <div key={scheduleItem.id}>
                    <Space
                      key={scheduleItem.id}
                      direction="vertical"
                      style={{ display: "flex", marginBottom: 8 }}
                      className="w-full"
                    >
                      <div className="p-2  border-[2px] border-solid border-form-border rounded-[10px] w-full">
                        <FormItem
                          label={
                            <label className="label-form-small">Tiêu đề</label>
                          }
                          control={control}
                          name={`schedule.${scheduleIndex}.title`}
                        >
                          <Input />
                        </FormItem>

                        <NestedDescTourForm
                          nestIndex={scheduleIndex}
                          control={control}
                        />
                      </div>
                    </Space>
                  </div>
                );
              })}

              <div className="flex items-center gap-2 justify-end">
                <Button type="dashed" onClick={() => remove(0)}>
                  Xóa lịch trình
                </Button>

                <Button
                  type="dashed"
                  onClick={() =>
                    appendSchedule({
                      title: "",
                      desc: [{ timeOfDate: "", detail: "" }],
                    })
                  }
                >
                  Thêm lịch trình
                </Button>
              </div>
            </Form.Item>
          </div>

          <Button type="primary" htmlType="submit" className="w-full">
            {loadingCreate || loadingUpdate
              ? "Loading..."
              : type === "create"
              ? "Tạo Tour"
              : "Cập nhật Tour"}
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default TourAdminForm;
