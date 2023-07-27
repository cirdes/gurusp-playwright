import React from "react";
import BeerModalBase from "./BeerModalBase";

class AddBeerModal extends React.Component {
  state = {
    selectedCountry: "",
  };

  onFinish = (values) => {
    this.props.reloadBeers();
  };

  render() {
    return (
      <BeerModalBase
        title="Add New Beer"
        initialValues={null}
        onFinish={this.onFinish}
        selectedCountry={this.state.selectedCountry}
      />
    );
  }
}

export default AddBeerModal;

// import { Button, Form, Input, Modal, Select } from "antd";
// import React from "react";

// class AddBeerModal extends React.Component {
//   formRef = React.createRef();
//   state = {
//     visible: false,
//     selectedCountry: ""
//   };



//   handleBrandBlur = () => {
//     const { brandValue } = this.state;
//     this.getBreweryInfo(brandValue);
//   };

//   handleBrandChange = (e) => {
//     this.setState({ brandValue: e.target.value });
//   };

//   getBreweryInfo = async (value) => {
//     const url = `https://api.openbrewerydb.org/v1/breweries/search?query=${value}&per_page=1`;

//     try {
//       const response = await fetch(url);
//       const data = await response.json();

//       if (data.length !== 0) {
//         const selectedCountry = data[0].country;
//         this.setState({ selectedCountry });
//       }
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   showModal = () => {
//     this.setState({
//       visible: true,
//     });
//   };

//   handleCancel = () => {
//     this.setState({
//       visible: false,
//     });
//   };

//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.selectedCountry !== this.state.selectedCountry) {
//       const form = this.formRef.current;
//       if (form) {
//         form.setFieldsValue({ country: this.state.selectedCountry });
//       }
//     }
//   }

//   render() {
//     return (
//       <>
//         <Button type="primary" onClick={this.showModal}>
//           Create New +
//         </Button>

//         <Modal title="Add New Beer ..." open={this.state.visible} onCancel={this.handleCancel} footer={null}>
//           <Form ref={this.formRef} layout="vertical" onFinish={this.onFinish}>
//             <Form.Item name="brand" label="Brand" rules={[{ required: true, message: "Please input your beer brand!" }]} onChange={this.handleBrandChange} onBlur={this.handleBrandBlur}>
//               <Input placeholder="Input your beer brand" />
//             </Form.Item>

//             <Form.Item name="style" label="Style" rules={[{ required: true, message: "Please input your beer style!" }]}>
//               <Input placeholder="Input your beer style" />
//             </Form.Item>

//             <Form.Item
//               name="country"
//               label="Country"
//               rules={[
//                 {
//                   required: true,
//                   message: "Please input the country of the beer!",
//                 },
//               ]}
//               onChange={(e) => this.setState({ selectedCountry: e.target.value })}
//               value={this.state.selectedCountry}
//             >
//               <Input placeholder="Input your beer country" />
//             </Form.Item>

//             <Form.Item name="quantity" label="Quantity" rules={[{ required: true, message: "Please input the quantity!" }]}>
//               <Input type="number" placeholder="How many beers you desire?" />
//             </Form.Item>

//             <Form.Item>
//               <Button type="primary" htmlType="submit">
//                 Submit
//               </Button>
//             </Form.Item>
//           </Form>
//         </Modal>
//       </>
//     );
//   }
// }

// export default AddBeerModal;



