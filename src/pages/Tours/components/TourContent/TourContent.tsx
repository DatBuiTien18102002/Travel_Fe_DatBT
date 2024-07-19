import { TourCard } from "@/components";
import { tourType } from "@/types/types";
import { Row, Col } from "antd";
import React from "react";

const TourContent = ({ tours = [] }: { tours: tourType[] }) => {
  return (
    <Row gutter={[16, 16]}>
      {tours?.map((item) => {
        return (
          <Col key={item.name} lg={6} sm={8} span={12}>
            <TourCard tour={item} />
          </Col>
        );
      })}
      {/* <Col lg={6} sm={8} span={12}>
        <TourCard />
      </Col>
      <Col lg={6} sm={8} span={12}>
        <TourCard />
      </Col>
      <Col lg={6} sm={8} span={12}>
        <TourCard />
      </Col>
      <Col lg={6} sm={8} span={12}>
        <TourCard />
      </Col>
      <Col lg={6} sm={8} span={12}>
        <TourCard />
      </Col>
      <Col lg={6} sm={8} span={12}>
        <TourCard />
      </Col> */}
    </Row>
  );
};

export default TourContent;
