import { tourAdminForm } from "@/types/types";
import { Button, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import React from "react";
import { Control, useFieldArray } from "react-hook-form";
import { FormItem } from "react-hook-form-antd";

const NestedDescTourForm = ({
  nestIndex,
  control,
}: {
  nestIndex: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<tourAdminForm, any>;
}) => {
  const { fields, remove, append } = useFieldArray({
    control,
    name: `schedule.${nestIndex}.desc`,
  });

  return (
    <div>
      <div className="mb-[8px] flex justify-between items-center">
        <label className="label-form-medium">Hoạt động</label>

        <div className="flex items-center gap-2">
          <Button type="dashed" onClick={() => remove(0)}>
            Xóa hoạt động
          </Button>

          <Button
            type="dashed"
            onClick={() =>
              append({
                timeOfDate: "",
                detail: "",
              })
            }
          >
            Thêm hoạt động
          </Button>
        </div>
      </div>

      {fields.map((descItem, descIndex) => (
        <React.Fragment key={descItem.id}>
          <div className="flex justify-between items-start gap-4">
            <FormItem
              label={<label className="label-form-small">Thời gian:</label>}
              control={control}
              name={`schedule.${nestIndex}.desc.${descIndex}.timeOfDate`}
              className="flex-1"
            >
              <Input />
            </FormItem>

            <FormItem
              label={<label className="label-form-small">Mô tả:</label>}
              control={control}
              name={`schedule.${nestIndex}.desc.${descIndex}.detail`}
              className="flex-1"
            >
              <TextArea style={{ height: 100, resize: "none" }} />
            </FormItem>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default NestedDescTourForm;
