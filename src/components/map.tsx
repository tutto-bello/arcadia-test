import React, { useEffect, useState } from "react";
import Loader from "./loader";
import { Cartesian3, Ion } from "cesium";
import {
  Viewer,
  Entity,
  CameraFlyTo,
  BillboardCollection,
  Billboard,
} from "resium";
import "cesium/Build/Cesium/Widgets/widgets.css";

const Map = () => {
  const [data, setData] = useState<
    | undefined
    | {
        budapest: { lat: string; lng: string };
        dresden: { lat: string; lng: string };
        los_angeles: { lat: string; lng: string };
      }
  >();
  Ion.defaultAccessToken = process.env
    .NEXT_PUBLIC_CESIUM_ACCESS_TOKEN as string;

  const getCoordinate = async () => {
    try {
      const res = await fetch(`http://localhost:3000/api/get-coordinate`);
      const data = await res.json();
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCoordinate();
  }, []);

  if (!data) {
    return <Loader />;
  }
  return (
    <div>
      <Viewer animation>
        <Entity
          description="Budapest Deák Ferenc tér"
          name="Budapest"
          point={{ pixelSize: 10 }}
          position={Cartesian3.fromDegrees(
            Number(data.budapest.lng),
            Number(data.budapest.lat),
            100
          )}
        />
        <CameraFlyTo
          destination={Cartesian3.fromDegrees(
            Number(data.budapest.lng),
            Number(data.budapest.lat),
            5000
          )}
          duration={4}
        />
        <BillboardCollection>
          <Billboard
            scale={0.1}
            image="/logo.png"
            position={Cartesian3.fromDegrees(19.0219542, 47.5022044, 100)}
          />
        </BillboardCollection>
      </Viewer>
    </div>
  );
};

export default Map;
