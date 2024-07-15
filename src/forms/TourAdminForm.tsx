import { Button, Form, Input, InputNumber, Space, Upload } from "antd";
import React, { useState } from "react";
import { UploadOutlined } from "@ant-design/icons";
import type { UploadFile } from "antd";
import { RcFile } from "antd/es/upload";
import getBase64 from "@/utils/getBase64";
import { useFieldArray, useForm } from "react-hook-form";
import { tourAdminForm } from "@/types/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { tourAdminSchema } from "@/forms/validateSchemas";
import { FormItem } from "react-hook-form-antd";
import TextArea from "antd/es/input/TextArea";
import NestedDescTourForm from "@/forms/NestedDescTourForm";
import { MultiDatePicker } from "@/components";
import { Value } from "react-multi-date-picker";

const TourAdminForm = () => {
  const [photo, setPhoto] = useState("");
  const [form] = Form.useForm();
  const [departDate, setDepartDate] = useState<Value[]>([]);

  const defaultValues = {
    name: "",
    price: undefined,
    discount: undefined,
    maxSeat: undefined,
    depart: "",
    destination: "",
    transport: "",
    timeTravel: "",
    desc: {
      introduce: "",
      overview: "",
      topic: "",
    },
    schedule: [
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

  const { control, handleSubmit } = formReactHook;

  const {
    fields: scheduleFields,
    append: appendSchedule,
    remove,
  } = useFieldArray({
    control,
    name: "schedule",
  });

  const handleSubmitForm = (values: tourAdminForm) => {
    console.log(values);
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
              {/* <FormItem
                label={<label className="label-form">Ngày khởi hành:</label>}
                control={control}
                name="name"
              >
                <Input />
              </FormItem> */}
              <div className="label-form mb-[8px]">Ngày khởi hành</div>
              <MultiDatePicker onDatesChange={setDepartDate} />
              <FormItem
                label={<label className="label-form">Thời gian du lịch:</label>}
                control={control}
                name="timeTravel"
              >
                <Input />
              </FormItem>
              <FormItem
                label={
                  <label className="label-form">Phương tiện di chuyển:</label>
                }
                control={control}
                name="transport"
              >
                <Input />
              </FormItem>
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

              <div className="flex items-center gap-2">
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
            </Form.Item>
          </div>

          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default TourAdminForm;
