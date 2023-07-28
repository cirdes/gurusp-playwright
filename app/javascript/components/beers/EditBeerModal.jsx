import React from "react";
import BeerModalBase from "./BeerModalBase";

class EditBeerModal extends React.Component {
  onFinish = (values) => {
    // const url = "api/v1/beers/update";
    this.props.reloadBeers();
  };

  render() {
    let beer = this.props.beer;
    return (
      <BeerModalBase
        title="Edit Beer"
        initialValues={beer}
        onFinish={this.onFinish}
        selectedCountry={beer.country}
      />
    );
  }
}

export default EditBeerModal;

// import { Button, Form, Input, Modal, Select } from "antd";
// import React from "react";

// class EditBeerModal extends React.Component {
//   formRef = React.createRef();
//   state = {
//     visible: false,
//   };

//   onFinish = (values) => {
//     const url = "api/v1/beers/update";
//     values.id = this.props.beer.id;
//     fetch(url, {
//       method: "post",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(values),
//     })
//       .then((data) => {
//         if (data.ok) {
//           this.handleCancel();

//           return data.json();
//         }
//         throw new Error("Network error.");
//       })
//       .then(() => {
//         this.props.reloadBeers();
//       })
//       .catch((err) => console.error("Error: " + err));
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
//     let beer = this.props.beer;
//     return (
//       <>
//         <a onClick={this.showModal}>Edit</a>

//         <Modal title="Edit Beer ..." open={this.state.visible} onCancel={this.handleCancel} footer={null}>
//           <Form ref={this.formRef} layout="vertical" onFinish={this.onFinish} initialValues={beer}>
//           <Form.Item name="brand" label="Brand" rules={[{ required: true, message: "Please input your beer brand!" }]} onChange={this.handleBrandChange} onBlur={this.handleBrandBlur}>
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
//                 Save
//               </Button>
//             </Form.Item>
//           </Form>
//         </Modal>
//       </>
//     );
//   }
// }

// export default EditBeerModal;


