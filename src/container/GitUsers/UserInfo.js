import React, { useEffect, useState } from "react";
import { getUser } from "../../service";
export default function UserInfo(props) {
  const query = props.match.params.login;
  const [info, setInfo] = useState(null);
  const [stringInfo, setStringInfo] = useState("");
  useEffect(() => {
    (async () => {
      let result = await getUser(query);
      console.log("result", result);
      setInfo(result?.data);
      let string = "";
      for (var key in result?.data) {
        string += `"${key}": "${result?.data[key]}",\n`;
      }
      setStringInfo(string);
    })();
  }, []);
  return (
    <div style={{ fontSize: "14px" }}>
      {!info ? (
        <div>User not found</div>
      ) : (
        <div>
          <div className="info-json">{stringInfo}</div>
          <br />
          <div className="info-item">
            <label>Repositories: </label>
            <span>{info.repos_url}</span>
          </div>
          <div className="info-item">
            <label>Followers: </label>
            <span>{info.followers}</span>
          </div>
          <div className="info-item">
            <label>Following: </label>
            <span>{info.following}</span>
          </div>
        </div>
      )}
    </div>
  );
}
