import React from "react";
import moment from "moment";
import LoadingComponent from "../Components/LoadingComponent";
import TableComponent from "../Components/TableComponent";
import { convertToRupiah } from "../helpers/convertToRupiah";

export default function CharDisplayComponent(props) {
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
              <TableComponent
                id={val.id}
                nama_user={val.nama_user}
                nama={val.nama?.map((val) => {
                  return (
                    <>
                      <ul>
                        <li style={{ listStyle: "none" }}>{val}</li>
                      </ul>
                    </>
                  );
                })}
                quantity={val.quantity?.map((val) => {
                  return (
                    <>
                      <ul>
                        <li style={{ listStyle: "none" }}>{val}</li>
                      </ul>
                    </>
                  );
                })}
                status={val.status}
                tanggal={moment(val.tanggal).format("LL")}
                total={convertToRupiah(val.total)}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}