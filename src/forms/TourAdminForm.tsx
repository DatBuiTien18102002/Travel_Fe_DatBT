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

const TourAdminForm = () => {
  const [photo, setPhoto] = useState("");
  const [form] = Form.useForm();

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
              <FormItem label="Tên tour:" control={control} name="name">
                <Input />
              </FormItem>
              <FormItem label="Giá tour:" control={control} name="price">
                <InputNumber className="w-full" min={0} />
              </FormItem>
              <FormItem label="Giảm giá:" control={control} name="discount">
                <InputNumber className="w-full" min={0} />
              </FormItem>
              <FormItem label="Số người:" control={control} name="maxSeat">
                <InputNumber className="w-full" min={0} />
              </FormItem>
            </div>

            <div className="flex flex-col w-[45%] gap-4 custom-avatar-antd">
              <div className="w-full rounded-[5px] overflow-hidden h-[300px]">
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
              <FormItem label="Điểm khởi hành:" control={control} name="depart">
                <Input />
              </FormItem>
              <FormItem label="Điểm đến:" control={control} name="destination">
                <Input />
              </FormItem>
              <FormItem label="Ngày khởi hành:" control={control} name="name">
                <Input />
              </FormItem>
              <FormItem
                label="Thời gian du lịch:"
                control={control}
                name="timeTravel"
              >
                <Input />
              </FormItem>
              <FormItem
                label="Phương tiện di chuyển:"
                control={control}
                name="transport"
              >
                <Input />
              </FormItem>
            </div>
            <div className="w-[60%] flex flex-col">
              <FormItem
                label="Giới thiệu tour:"
                control={control}
                name="desc.introduce"
              >
                <TextArea style={{ height: 135, resize: "none" }} />
              </FormItem>
              <FormItem
                label="Tổng quan tour:"
                control={control}
                name="desc.overview"
              >
                <TextArea style={{ height: 135, resize: "none" }} />
              </FormItem>
              <FormItem
                label="Chủ đề tour tour:"
                control={control}
                name="desc.topic"
              >
                <Input />
              </FormItem>
            </div>
          </div>

          <div className="w-full">
            <Form.Item label={<label className="label-form">Lịch trình</label>}>
              {scheduleFields.map((scheduleItem, scheduleIndex) => {
                return (
                  <div key={scheduleItem.id}>
                    <Space
                      key={scheduleItem.id}
                      direction="vertical"
                      style={{ display: "flex", marginBottom: 8 }}
                      className="w-full"
                    >
                      <div className="p-2  border-[2px] border-solid border-sky rounded-[10px] w-full">
                        <FormItem
                          label="Tiêu đề"
                          control={control}
                          name={`schedule.${scheduleIndex}.title`}
                        >
                          <Input />
                        </FormItem>

                        <NestedDescTourForm
                          nestIndex={scheduleIndex}
                          control={control}
                        />

                        <button
                          type="button"
                          onClick={() => remove(scheduleIndex)}
                        >
                          Xóa lịch trình {scheduleIndex}
                        </button>
                      </div>
                    </Space>
                  </div>
                );
              })}

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
