import React from 'react';

import {
  Icon,
  Button,
  SectionTitle,
  SectionText,
  Card,
  CardBody,
} from 'reactstrap';

import Page from 'components/Page';

class ButtonPage extends React.Component {
  state = {
    rSelected: null,
    cSelected: [],
  };

  onCheckboxBtnClick(selected) {
    const index = this.state.cSelected.indexOf(selected);
    if (index < 0) {
      this.state.cSelected.push(selected);
    } else {
      this.state.cSelected.splice(index, 1);
    }
    this.setState({ cSelected: [...this.state.cSelected] });
  }

  render() {
    return (
      <Page
        className="container"
        title="Buttons"
        lead="Use Bootstrap’s custom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more."
        breadcrumbs={[{ name: 'Buttons', active: true }]}
      >

        <SectionTitle>Basic Styling</SectionTitle>
        <SectionText>Bootstrap includes several predefined button styles, each serving its own semantic purpose, with a few extras thrown in for more control.</SectionText>

        <Card className="df-example">
          <CardBody>
            <Button color="primary">Primary</Button>
            <Button color="secondary">Secondary</Button>
            <Button color="success">Success</Button>
            <Button color="warning">Warning</Button>
            <Button color="danger">Danger</Button>
            <Button color="info">Info</Button>
            <Button color="light">Light</Button>
            <Button color="dark">Dark</Button>
          </CardBody>
        </Card>

        <SectionTitle>Outline Buttons</SectionTitle>
        <SectionText>In need of a button, but not the hefty background colors they bring? Replace the default modifier classes with the .btn-outline-* ones to remove all background images and colors on any button.</SectionText>

        <Card className="df-example">
          <CardBody>
            <Button outline color="primary">Primary</Button>
            <Button outline color="secondary">Secondary</Button>
            <Button outline color="success">Success</Button>
            <Button outline color="warning">Warning</Button>
            <Button outline color="danger">Danger</Button>
            <Button outline color="info">Info</Button>
            <Button outline color="light">Light</Button>
            <Button outline color="dark">Dark</Button>
          </CardBody>
        </Card>

        <SectionTitle>Button Sizes</SectionTitle>
        <SectionText>Button can have additional sizes like larger or smaller buttons.</SectionText>

        <Card className="df-example">
          <CardBody>
            <Button color="primary" size="xs">Extra Small</Button>
            <Button color="primary" size="sm">Small</Button>
            <Button color="primary">Regular</Button>
            <Button color="primary" size="lg">Large</Button>
          </CardBody>
        </Card>

        <SectionTitle>Button Full Width</SectionTitle>
        <SectionText>Create block level buttons—those that span the full width of a parent.</SectionText>

        <Card className="df-example">
          <CardBody>
            <Button block color="primary">Primary</Button>
            <Button block color="secondary">Secondary</Button>
          </CardBody>
        </Card>

        <SectionTitle>Active State</SectionTitle>
        <SectionText>Buttons will appear pressed (with a darker background, darker border, and inset shadow) when active and also by adding .active class.</SectionText>

        <Card className="df-example">
          <CardBody>
            <Button active color="primary">Primary</Button>
            <Button active color="secondary">Secondary</Button>
          </CardBody>
        </Card>

        <SectionTitle>Disabled State</SectionTitle>
        <SectionText>Make buttons look inactive by adding the disabled boolean attribute to any button element.</SectionText>

        <Card className="df-example">
          <CardBody>
            <Button disabled color="primary">Primary</Button>
            <Button disabled color="secondary">Secondary</Button>
          </CardBody>
        </Card>

        <SectionTitle>Rounder Corner</SectionTitle>
        <SectionText>Make rounded corner buttons by adding a class modifier from Bootstrap utilities class.</SectionText>

        <Card className="df-example">
          <CardBody>
            <Button rounded color="primary">Primary</Button>
            <Button rounded color="secondary">Secondary</Button>
          </CardBody>
        </Card>

        <SectionTitle>Icon Button</SectionTitle>
        <SectionText>Make icon buttons by adding only icon and add class modifier using icon attribute.</SectionText>

        <Card className="df-example">
          <CardBody>
            <Button icon color="primary"><Icon name="arrow-left"></Icon></Button>
            <Button icon color="secondary"><Icon name="arrow-right"></Icon></Button>
          </CardBody>
        </Card>
      </Page>
    );
  }
}

export default ButtonPage;
