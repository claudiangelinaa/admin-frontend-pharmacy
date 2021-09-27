import React from "react";
import moment from "moment";
import LoadingComponent from "./LoadingComponent";
import RacikTableComponent from "./RacikTableComponent";
import { convertToRupiah } from "../helpers/convertToRupiah";

export default function RacikHistoryDisplayComponent(props) {
  console.log(props)
    if (props.isLoading) {
        return (
          <div>
            <LoadingComponent />
          </div>
        );
      }

  return (
    <div>
      {(props.currentPosts.length === 0) ? (
        <div > 
            <h3>User not found...</h3>
        </div>
      ) : (
      <div>
       {props.currentPosts.map((val) => {
            return (
              <RacikTableComponent
                id={val.id}
                nama_user={val.nama}
                status={val.status}
                tanggal={moment(val.tanggal).format("LL")}
                resep_image={val.resep_image}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}