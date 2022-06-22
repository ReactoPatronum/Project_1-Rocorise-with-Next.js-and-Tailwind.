import React from "react";

const etkinlik_saatleri = () => {
  return (
    <div className="p-2 sm:p-10 flex items-center justify-center min-h-[80vh] bg-[#0E3241]">
      <div className="divTable blueTable w-full sm:w-5/6 max-w-4xl ">
        <div className="divTableHeading">
          <div className="divTableRow">
            <div className="divTableHead">Etkinlik</div>
            <div className="divTableHead">Saatler</div>
          </div>
        </div>
        <div className="divTableBody">
          <div className="divTableRow">
            <div className="divTableCell">Çok yakında</div>
            <div className="divTableCell">Çok yakında</div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default etkinlik_saatleri;
