import { styled } from "styled-components";
import { useEffect, useState } from "react";
import ListHeader from "./ListHeader";
import ListBody from "./ListBody";
import ListPaginationBox from "./ListPaginationBox";

function ListBox() {
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;
  const data = [
    {
      id: 1,
      email: "test@1.com",
      amount: 3,
      time: "2023.08.05",
    },
    {
      id: 2,
      email: "test@2.com",
      amount: 31,
      time: "2023.08.05",
    },
    {
      id: 3,
      email: "test@3.com",
      amount: 6,
      time: "2023.08.05",
    },
    {
      id: 4,
      email: "test@4.com",
      amount: 12,
      time: "2023.08.05",
    },
    {
      id: 5,
      email: "test@5.com",
      amount: 23,
      time: "2023.08.05",
    },
    {
      id: 6,
      email: "test@1.com",
      amount: 3,
      time: "2023.08.05",
    },
    {
      id: 7,
      email: "test@2.com",
      amount: 31,
      time: "2023.08.05",
    },
    {
      id: 8,
      email: "test@3.com",
      amount: 6,
      time: "2023.08.05",
    },
    {
      id: 9,
      email: "test@4.com",
      amount: 12,
      time: "2023.08.05",
    },
    {
      id: 10,
      email: "test@5.com",
      amount: 23,
      time: "2023.08.05",
    },
    {
      id: 11,
      email: "test@1.com",
      amount: 3,
      time: "2023.08.05",
    },
    {
      id: 12,
      email: "test@2.com",
      amount: 31,
      time: "2023.08.05",
    },
    {
      id: 13,
      email: "test@3.com",
      amount: 6,
      time: "2023.08.05",
    },
    {
      id: 14,
      email: "test@4.com",
      amount: 12,
      time: "2023.08.05",
    },
    {
      id: 15,
      email: "test@5.com",
      amount: 23,
      time: "2023.08.05",
    },
    {
      id: 10,
      email: "test@5.com",
      amount: 23,
      time: "2023.08.05",
    },
    {
      id: 11,
      email: "test@1.com",
      amount: 3,
      time: "2023.08.05",
    },
    {
      id: 12,
      email: "test@2.com",
      amount: 31,
      time: "2023.08.05",
    },
    {
      id: 13,
      email: "test@3.com",
      amount: 6,
      time: "2023.08.05",
    },
    {
      id: 14,
      email: "test@4.com",
      amount: 12,
      time: "2023.08.05",
    },
    {
      id: 15,
      email: "test@5.com",
      amount: 23,
      time: "2023.08.05",
    },
    {
      id: 10,
      email: "test@5.com",
      amount: 23,
      time: "2023.08.05",
    },
    {
      id: 11,
      email: "test@1.com",
      amount: 3,
      time: "2023.08.05",
    },
    {
      id: 12,
      email: "test@2.com",
      amount: 31,
      time: "2023.08.05",
    },
    {
      id: 13,
      email: "test@3.com",
      amount: 6,
      time: "2023.08.05",
    },
    {
      id: 14,
      email: "test@4.com",
      amount: 12,
      time: "2023.08.05",
    },
    {
      id: 15,
      email: "test@5.com",
      amount: 23,
      time: "2023.08.05",
    },
    {
      id: 10,
      email: "test@5.com",
      amount: 23,
      time: "2023.08.05",
    },
    {
      id: 11,
      email: "test@1.com",
      amount: 3,
      time: "2023.08.05",
    },
    {
      id: 12,
      email: "test@2.com",
      amount: 31,
      time: "2023.08.05",
    },
    {
      id: 13,
      email: "test@3.com",
      amount: 6,
      time: "2023.08.05",
    },
    {
      id: 14,
      email: "test@4.com",
      amount: 12,
      time: "2023.08.05",
    },
    {
      id: 15,
      email: "test@5.com",
      amount: 23,
      time: "2023.08.05",
    },
  ];
  // const [loading, setLoading] = useState(false);
  // const getData = async () => {
  //   await fetch("/list", {
  //     method: "GET",
  //     mode: "no-cors",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   }).then((result) => {
  //     result.json().then((response) => {
  //       for (let d of response) {
  //         data.push({ id: d.id, email: d.email, time: d.localDateTime, amount: d.dataCount });
  //       }
  //       console.log(data);
  //       setLoading(true);
  //     });
  //   });
  // };

  // useEffect(() => {
  //   getData();
  // }, []);

  return (
    <ListBoxContainer>
      <ListContainer>
        <ListHeader />
        {data.slice(offset, offset + limit).map((e) => {
          return <ListBody id={e.id} email={e.email} amount={e.amount} time={e.time} />;
        })}
      </ListContainer>
      <ListPaginationBox total={data.length} limit={limit} page={page} setPage={setPage}></ListPaginationBox>
    </ListBoxContainer>
  );
}

export default ListBox;

const ListBoxContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ListContainer = styled.div`
  width: 80%;
  height: 110rem;
  border-radius: 0.6rem;
  border: 1px solid rgba(0, 0, 0, 0.2);
`;

// const TestBtn = styled.div`
//   width: 100px;
//   height: 100px;
//   border: 1px solid rgba(0, 0, 0, 0.2);
// `;
