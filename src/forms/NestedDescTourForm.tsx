import { Button, Input } from "antd";
import React from "react";
import { useFieldArray } from "react-hook-form";
import { FormItem } from "react-hook-form-antd";

const NestedDescTourForm = ({ nestIndex, control }) => {
  const { fields, remove, append } = useFieldArray({
    control,
    name: `schedule.${nestIndex}.desc`,
  });

  return (
    <div>
      {fields.map((descItem, descIndex) => (
        <React.Fragment key={descItem.id}>
          <FormItem
            label="Thời gian"
            control={control}
            name={`schedule.${nestIndex}.desc.${descIndex}.timeOfDate`}
          >
            <Input />
          </FormItem>

          <FormItem
            label="Chi tiết"
            control={control}
            name={`schedule.${nestIndex}.desc.${descIndex}.detail`}
          >
            <Input />
          </FormItem>
          <Button type="dashed" onClick={() => remove(descIndex)}>
            Xóa ngày
          </Button>
        </React.Fragment>
      ))}

      <Button
        type="dashed"
        onClick={() =>
          append({
            timeOfDate: "",
            detail: "",
          })
        }
      >
        Thêm ngày
      </Button>
    </div>
  );
};

export default NestedDescTourForm;
