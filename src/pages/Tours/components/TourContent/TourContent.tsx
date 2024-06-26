import { TourCard } from "@/components";
import { Row, Col } from "antd";
import React from "react";

const TourContent = () => {
  return (
    <Row gutter={[16, 16]}>
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
      </Col>
      <Col lg={6} sm={8} span={12}>
        <TourCard />
      </Col>
      <Col lg={6} sm={8} span={12}>
        <TourCard />
      </Col>
    </Row>
  );
};

export default TourContent;
