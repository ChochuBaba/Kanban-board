import React, { useEffect, useState } from "react";
import { GiSettingsKnobs } from 'react-icons/gi';
import { MdArrowDropDown } from 'react-icons/md';
import '../styles/Navigation.css';
import { useDispatch, useSelector } from "react-redux";
import { selectData } from "../Actions/SelectData";

const getGroup = () => {
  if (localStorage.getItem("group")) {
    return localStorage.getItem("group");
  } else {
    return "status";
  }
};

const getOrder = () => {
  if (localStorage.getItem("order")) {
    return localStorage.getItem("order");
  } else {
    return "priority";
  }
};

const Navigation = () => {
  const [displayOnClick, setDisplayOnClick] = useState(false);
  const dispatch = useDispatch();
  const { Tickets, Users } = useSelector(state => state.FetchDataReducer);
  const [groupValue, setGroupValue] = useState(getGroup());
  const [orderValue, setOrderValue] = useState(getOrder());

  const handleGroupValue = (e, valueBool) => 
  {
    if (valueBool) 
    {
      setGroupValue(e.target.value);
    } else 
    {
      setOrderValue(e.target.value);
    }
    setDisplayOnClick(!displayOnClick);
    localStorage.setItem(valueBool ? "group" : "order", e.target.value);
  };

  useEffect(() =>  //BASED ON THE VALUE OF GROUP AND ORDER IT SENDS THE ACTION TO RETURN THE FINAL DATA TO BE CHANGED
  {
    if (groupValue === 'user') 
    {
      dispatch(selectData(groupValue, { Tickets, Users }, orderValue));
    } 
    else 
    {
      dispatch(selectData(groupValue, Tickets, orderValue));
    }
  }, [dispatch, groupValue, Tickets, Users, orderValue]);

  return ( //RETURNS THE DISPLAY BUTTON ICON WHICH THE USER INTERACTS WITH AND SETS THE VALUE OF GROUP AND ORDER TO
    <div className="top-header">
      <div className="displayButton" >
        <button className="p-10 f-16 btn display-button" onClick={() => setDisplayOnClick(!displayOnClick)}>
          <GiSettingsKnobs className="icon" />
          <span className="display-text">Display</span>
          <MdArrowDropDown className="icon" />
        </button>
        {displayOnClick && (
          <div className="dropOnClick p-10">
            <div className="selectGroup flex-sb">
              <span>Grouping</span>
              <select value={groupValue} onChange={(e) => handleGroupValue(e, true)} className="selectStyle select-group" name="group" id="group">
                <option value="status">Status</option>
                <option value="user">User</option>
                <option value="priority">Priority</option>
              </select>
            </div>
            <div className="selectGroup flex-sb">
              <span>Ordering</span>
              <select value={orderValue} onChange={(e) => handleGroupValue(e, false)} className="selectStyle" name="order" id="order">
                <option value="priority">Priority</option>
                <option value="title">Title</option>
              </select>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navigation;
