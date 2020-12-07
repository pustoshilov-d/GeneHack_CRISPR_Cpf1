// import React from "react";
//
// import {OutTable, ExcelRenderer} from 'react-excel-renderer';
// // import fileOnTarget from "../data/Human 1chr on-target.xlsx"
// import {Card} from "react-bootstrap"
// import XLSX from 'xlsx';
//
// // import fileOnTarget  from "../../public/data/Human 1chr on-target.xlsx"
//
// const reader = new FileReader()
//
//
// class Testing extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             isOpen: false,
//             message: "meassds",
//             dataLoaded: false
//         }
//     this.fileHandler = this.fileHandler.bind(this)
//
//     }
//
//     fileHandler =  async (e) => {
//         let fileObj = e.target.files[0];
//
//         // let fileObj = reader.readAsBinaryString(fileOnTarget);
//         // var workbook = XLSX.readFile('../data/Human 1chr on-target.xlsx');
//
//         // just pass the fileObj as parameter
//         ExcelRenderer(fileObj, (err, resp) => {
//             if(err){
//                 console.log(err);
//             }
//             else{
//                 this.setState({
//                     dataLoaded: true,
//                     cols: resp.cols,
//                     rows: resp.rows
//                 });
//             }
//             console.log(JSON.stringify(this.state))
//         });
//
//     }
//
//     render() {
//
//         return (
//             <div>
//                 <input type="file" onChange={this.fileHandler} style={{"padding":"10px"}} />
//                 {this.state.dataLoaded &&
//                 <div>
//                     <Card body outline color="secondary" className="restrict-card">
//
//                         <OutTable data={this.state.rows} columns={this.state.cols} tableClassName="ExcelTable2007" tableHeaderRowClass="heading" />
//
//                     </Card>
//                 </div>}
//             </div>
//         );
//     }
// }
// export default Testing;
