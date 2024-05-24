import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { removeContact } from "../../store";

interface CardProps {
  details: {
    id: number;
    firstName: string;
    lastName: string;
    status: string;
  };
}

const Card: React.FC<CardProps>= ({ details }) => {
  const dispatch = useDispatch();

  return (
    <div className="lg:w-[300px] w-[250px] border border-navy-Light p-5 rounded shadow-md ">
      {/* Display contact's name */}
      <p className="text-lg font-semibold text-white">
        {details.firstName} {details.lastName}
      </p>

      {details.status === "Active" && (
        <p className="text-green-600 font-medium mt-2">Active</p>
      )}
      {details.status === "Inactive" && (
        <p className="text-red-600 font-medium mt-2">Inactive</p>
      )}
      <div className="flex items-center justify-between gap-5 mt-5">
        <Link to="/contacts/edit" state={details} className="w-full">
          <Button text="Edit" variant="edit" className="w-full" />
        </Link>

        <Button
          onClick={() => {
            dispatch(removeContact(details?.id));
          }}
          text="Delete"
          variant="delete"
          className="w-full"
        />
      </div>
    </div>
  );
};

export default Card;
