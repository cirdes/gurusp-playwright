import React from "react";
import { Button, Form, Input, Modal } from "antd";

class BeerModal extends React.Component {
  formRef = React.createRef();
  state = {
    visible: false,
    selectedCountry: "",
    brandValue: "",
  };

  handleBrandBlur = () => {
    const { brandValue } = this.state;
    this.getBreweryInfo(brandValue);
  };

  handleBrandChange = (e) => {
    this.setState({ brandValue: e.target.value });
  };

  handleCancel = () => {
    this.setState({
      visible: false,
    });
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  getBreweryInfo = async (value) => {
    const url = `https://api.openbrewerydb.org/v1/breweries/search?query=${value}&per_page=1`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.length !== 0) {
        const selectedCountry = data[0].country;
        this.setState({ selectedCountry });
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  onFinish = (values) => {
    const { onFinish } = this.props;
    const url = this.props.title === "Add New Beer" ? "api/v1/beers/create" : "api/v1/beers/update";
    if (this.props.title === "Edit Beer") { 
      values.id = this.props.initialValues.id;
    }
    fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((data) => {
        if (data.ok) {
          this.handleCancel();
          return data.json();
        }
        throw new Error("Network error.");
      })
      .then(() => {
        onFinish();
        this.formRef.current.resetFields();
      })
      .catch((err) => console.error("Error: " + err));
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.selectedCountry !== this.state.selectedCountry) {
      const form = this.formRef.current;
      if (form) {
        form.setFieldsValue({ country: this.state.selectedCountry });
      }
    }
  }

  render() {
    const { initialValues, title } = this.props;
    const { visible, selectedCountry } = this.state;

    return (
      <>
        <Button type="primary" onClick={this.showModal}>
          {this.props.title === "Add New Beer" ? "Create New +" : "Edit"}
        </Button>

        <Modal title={title} open={visible} onCancel={this.handleCancel} footer={null}>
          <Form ref={this.formRef} layout="vertical" onFinish={this.onFinish} initialValues={initialValues}>
            <Form.Item
              name="brand"
              label="Brand"
              rules={[{ required: true, message: "Please input your beer brand!" }]}
              onChange={this.handleBrandChange}
              onBlur={this.handleBrandBlur}>
              <Input placeholder="Input your beer brand" />
            </Form.Item>

            <Form.Item name="style" label="Style" rules={[{ required: true, message: "Please input your beer style!" }]}>
              <Input placeholder="Input your beer style" />
            </Form.Item>

            <Form.Item
              name="country"
              label="Country"
              onChange={(e) => this.setState({ selectedCountry: e.target.value })}
              value={selectedCountry}>
              <Input placeholder="Input your beer country" />
            </Form.Item>

            <Form.Item name="quantity" label="Quantity">
              <Input type="number" placeholder="How many beers you desire?" />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </>
    );
  }
}

export default BeerModal;
