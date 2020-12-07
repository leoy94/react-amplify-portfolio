import React from "react";

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Label,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";
// core components
import ScrollTransparentNavbar from "components/Navbars/ScrollTransparentNavbarCustom.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import FooterDefault from "components/Footers/FooterDefault.js";

function ProfilePage() {
  const [pills, setPills] = React.useState("1");
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [emailFocus, setEmailFocus] = React.useState(false);
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("profile-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  return (
    <>
      <ScrollTransparentNavbar />
      <div className="wrapper">
        <ProfilePageHeader />
        <div className="section">
          <Container>

            <h3 className="title">About me</h3>
            <h5 className="description text-center">
              Utilizing my software development experience, I create training materials,
              instruct training seminars, and lead enterprise builds. I enjoy reading, running, coding, and spending time with my dog.
            </h5>
            <div className="projects-5" style={{ paddingTop: "0" }}>

              <Row>
                <Col className="ml-auto" md="5">
                  <Card
                    className="card-background card-background-product card-raised"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/project8.jpg") + ")",
                    }}
                  >
                    <CardBody>
                      <CardTitle tag="h2">Professional Experience</CardTitle>
                      <p className="card-description">
                        I am a Sr. Systems Architect & Technical Team Lead at Coforge - a software consultancy company.
                      </p>
                      <div style={{ marginLeft: "5px" }}>
                        <Badge className="badge-neutral" >Agile Development</Badge>
                        <Badge className="badge-neutral" style={{ marginLeft: "5px" }}>Technical Writing</Badge>
                        <Badge className="badge-neutral" style={{ marginLeft: "5px" }}>Quality Control</Badge>
                        <Badge className="badge-neutral" style={{ marginLeft: "5px" }}>Enterprise Architecture</Badge>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
                <Col className="mr-auto" md="5">
                  <div className="info info-horizontal">
                    <div className="icon icon-danger">
                      <i className="now-ui-icons ui-2_chat-round"></i>
                    </div>
                    <div className="description">
                      <h4 className="info-title">
                        Listen to Social Conversations
                    </h4>
                      <p className="description">
                        Gain access to the demographics, psychographics, and
                        location of unique people who talk about your brand.
                    </p>
                    </div>
                  </div>
                  <div className="info info-horizontal">
                    <div className="icon icon-danger">
                      <i className="now-ui-icons business_chart-pie-36"></i>
                    </div>
                    <div className="description">
                      <h4 className="info-title">Performance Analyze</h4>
                      <p className="description">
                        Unify data from Facebook, Instagram, Twitter, LinkedIn,
                        and Youtube to gain rich insights from easy-to-use
                        reports.
                    </p>
                    </div>
                  </div>
                  <div className="info info-horizontal">
                    <div className="icon icon-danger">
                      <i className="now-ui-icons design-2_ruler-pencil"></i>
                    </div>
                    <div className="description">
                      <h4 className="info-title">Social Conversions</h4>
                      <p className="description">
                        Track actions taken on your website that originated from
                        social, and understand the impact on your bottom line.
                    </p>
                    </div>
                  </div>
                </Col>
              </Row>
              <hr></hr>
              <Row>
                <Col className="ml-auto" md="5" style={{marginTop: "0px"}}>
                  <Card
                      className="card-background card-background-product card-raised"
                      style={{
                        backgroundImage:
                            "url(" + require("assets/img/project9.jpg") + ")",
                      }}
                  >
                    <CardBody>
                      <CardTitle tag="h2">Education</CardTitle>
                      <p className="card-description">
                        I earned my Bachelor's Degree, at the College of Idaho, in International Political Economy.
                        <br /> I also completed three minors in the following disciplines: Computer Science, Business Administration, and Philosophy.
                      </p>
                      <div style={{ marginLeft: "5px" }}>
                        <Badge className="badge-neutral" >Thoughtful Curiosity</Badge>
                        <Badge className="badge-neutral" style={{ marginLeft: "5px" }}>Practical Experience</Badge>
                        <Badge className="badge-neutral" style={{ marginLeft: "5px" }}>Theoretical Experience</Badge>
                        <Badge className="badge-neutral" style={{ marginLeft: "5px" }}>Diverse Disciplines</Badge>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
                <Col className="mr-auto" md="5">
                  <div className="info info-horizontal" >
                    <div className="icon icon-warning">
                      <i className="now-ui-icons users_single-02"></i>
                    </div>
                    <div className="description">
                      <h4 className="info-title">Work With Any Team</h4>
                      <p className="description">
                        Whether it’s for work or even the next family vacation,
                        Trello helps your team.
                      </p>
                    </div>
                  </div>
                  <div className="info info-horizontal">
                    <div className="icon icon-warning">
                      <i className="now-ui-icons business_chart-bar-32"></i>
                    </div>
                    <div className="description">
                      <h4 className="info-title">A Productivity Platform</h4>
                      <p className="description">
                        Integrate the apps your team already uses directly into
                        your workflow.
                      </p>
                    </div>
                  </div>
                  <div className="info info-horizontal">
                    <div className="icon icon-warning">
                      <i className="now-ui-icons arrows-1_refresh-69"></i>
                    </div>
                    <div className="description">
                      <h4 className="info-title">Always In Sync</h4>
                      <p className="description">
                        No matter where you are, Trello stays in sync across all
                        of your devices.
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </div >

        < FooterDefault />
      </div >
    </>
  );
}

export default ProfilePage;
