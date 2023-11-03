import React from "react";
import useFetchUsers from "@/hooks/useFetchUsers";
import Navbar from "@/components/organisms/Navbar";
import SectionContainer from "@/components/containers/SectionContainer";
import Container from "@/components/containers/Container";
import GridContainer from "@/components/containers/GridContainer";
import UserTableDisplay from "@/components/organisms/UserTableDisplay";
import { IoIosPeople } from "react-icons/io";

const Users = () => {
  const { allUsers } = useFetchUsers();
  console.log("client data::", allUsers);
  return (
    <>
      <Navbar userRole="admin" />
      <SectionContainer className="mt-5">
        <Container>
          <GridContainer>
            <h2 className="text-xl font-semibold col-span-full flex items-center gap-4">
              <IoIosPeople className="text-3xl" />
              All Users
            </h2>
            <UserTableDisplay allUsers={allUsers} />
          </GridContainer>
        </Container>
      </SectionContainer>
    </>
  );
};

export default Users;
