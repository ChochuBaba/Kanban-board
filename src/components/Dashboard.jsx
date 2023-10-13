import React from "react";
import { useSelector } from "react-redux";
import { FcMediumPriority } from 'react-icons/fc';
import { GrStatusDisabled } from 'react-icons/gr';
import { AiOutlinePlus } from "react-icons/ai";
import '../styles/Dashboard.css'
import Card from "./Card";
import { FiMoreHorizontal } from 'react-icons/fi';

const Dashboard = () => { //TO GET THE FINAL DATA FROM THE REDUCER RETURNED BY THE SELECTDATA
  const { finalData, icon } = useSelector(
    (state) => state.SelectDataReducer 
  );


  const userIcons = { //THE FUNCTION WHICH CAN MANIPULATED MORE TO SET WHAT ICON IS SHOWN ON THE GROUP TITLE BASED ON THE ICON RETURNED BY THE SELECTDATA REDUCER
    0: <FcMediumPriority style={{ marginRight: '0.5px' }} />,
    1: (
      <div className="imageContainer relative" style={{ width: '15px', height: '15px', display: 'inline-block', marginRight: '10px' }}>
        <img
          style={{
            width: '100%',
            height: '100%',
            borderRadius: '50%',
          }}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRao_0xQcdcOVK9S6UuSGjkQGy4j2uPsZ0Uug&usqp=CAU"
          alt="The user"
        />
      </div>
    ),
    2: <GrStatusDisabled style={{ marginRight: '0.5px' }} />,
  };

  return (
    finalData && (
      <div className="dashContainer" style={{ justifyContent: "space-evenly" , padding: '20px'}}>
        {finalData.map((elem, index) => { 
          // GOES ON TO FETCH THE GROUPED DATA AS THE EACH ELEMENT INDIVIDAUAL IN FINAL DATA REPRESENTS THE GROUPED DATA ON A PARTICULAR GROUP VALUE
          return (
            <>
              <div key={index} className="dashCardContainer">
                <div className="dashCardHeading flex-sb">
                  <div className="leftView">
                    {userIcons[icon]} 
                    {/* THE ABOVE IS THE ICON BASED ON THE GROUP VALUE WE HAVE SET */}
                    <span >
                    {elem[index]?.title} 
                    <span style={{ fontFamily: 'Lato', color: 'rgb(180, 182, 187, 255)', fontWeight: 'bold'}}>
                      &nbsp;{elem[index]?.value?.length}
                    </span>
                  </span>

                  </div>
                  <div className="rightView" >
                    <AiOutlinePlus />{" "}
                    <span style={{ letterSpacing: "2px" }}><FiMoreHorizontal/></span>
                  </div>
                </div>
                <div className="dashList">
                  {elem[index]?.value?.map((elem, ind) => {
                    return (
                      <div className="cardWrapper" key={elem.id} >
                        <Card id={elem.id} title={elem.title} tag={elem.tag} />  
                        {/* LOADS THE CARD COMPONENT INDIVIDULALY BASED ON THE SINGULAR ELEMENT IN EACH OF THE SELECT DATA WHCIH CONSIST OF THE GROUPED DATA */}
                      </div>
                    );
                  })}
                </div>

              </div>
            </>
          );
        })}
      </div>
    )
  );
};

export default Dashboard;
