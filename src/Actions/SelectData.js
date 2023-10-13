//THE ACTION THAT IS MADE TO GROUP AND SORT THE DATA THAT IS RECIEVED FROM THE INITIAL FETCH BASED ON THE GROUP VALUE AND ORDER VALUE IT RECIEVES FROM THE NAVIGATION DISPLAY BUTTON


export const selectData = (groupValue, Tickets, orderValue) => async (dispatch) =>{
    try {

        let icon = 0;
        let finalData = [];

        switch (groupValue) //BASED ON THE VALUE OF GROUP IT RECIEVES IT CAN SET THE VALUE OF ICON SUCH THAT IT KNOWS THAT THE GROUPING IS DONE BY A SPECIFIC PARAMETER
        {
            case 'status':
                icon=2;
                const statusSet = new Set(Tickets.map((ticket) => ticket.status));
                const statuses = [...statusSet];

                statuses.forEach((status, index) => {
                    const filteredData = Tickets.filter((elem) => elem.status === status);
                    finalData.push({
                    [index]: {
                        title: status,
                        value: filteredData,
                    },
                    });
                });
                break;

            case 'user':
                icon=1;
                Tickets.Users.forEach((user, index) => {
                    const filteredData = Tickets.Tickets.filter((elem) => elem.userId === user.id);
                    finalData.push({
                    [index]: {
                        title: user.name,
                        value: filteredData,
                    },
                    });
                });
                break;

            default:
                icon=0;
                const priorities = ["No priority", "Low", "Medium", "High", "Urgent"];

                priorities.forEach((priority, index) => {
                    const filteredData = Tickets.filter((elem) => index === elem.priority);
                    finalData.push({
                    [index]: {
                        title: priority,
                        value: filteredData,
                    },
                    });
                });
                break;
        }

        if (orderValue === "title") // ORDERING BASED ON THE PARAMETER OF VALUE SET AND IT THEN FINALLY SENDS THE FINAL MANIPULATED DATA TO THE REDUCER TO UPDATE THE FINALDATA STATE
        {
            finalData.forEach((elem,index) => {
              elem[index].value.sort((a, b) => a.title.localeCompare(b.title));
            });
          }
          

        if(orderValue === "priority"){
            finalData.forEach((elem, index) => {
                elem[index].value.sort((a, b) => b.priority - a.priority) 
            })
        }
        
        dispatch({type : 'OPERATION_OK', payload : {finalData, icon}});

    } catch (error) {
        dispatch({type : 'OPERATION_FAIL', payload : error.message})
    }
}
