import React, {Component} from 'react';
import {CSSTransition, TransitionGroup} from "react-transition-group";
import {Col, Container, Form, Row, Button} from "react-bootstrap";
import mineImage from "../images/Mine.png";
import DmitryPhoto from "../images/Photos/Dima.jpg"
import AndreyPhoto from "../images/Photos/Andrey.jpg"
import NikitaPhoto from "../images/Photos/Nicita.jpg"
import KseniaPhoto from "../images/Photos/Ksenia.jpg"
import dnaImage from "../images/RNA3.png";
import EmailBtn from "../Components/Buttons/EmailBtn";
import GitBtn from "../Components/Buttons/GitBtn";
import GoBtn from "../Components/Buttons/GoBtn";

import { withRouter } from "react-router-dom"

const axios = require('axios').default;

class Home extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isHoverLeft: false,
            isHoverRight: false,
            timeout: 3000,


            name: 'For research',
            length: 20,
            system: '/Cpf1',
            PAM:'TTKGT',
            organism: 'Human',
            chromosome: '1',

        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.upload = this.upload.bind(this)
        this.onSelectChange = this.onSelectChange.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
    }

    onSelectChange =  async ({name, value}) => {
        await console.log("onSelectChange: ", name, value)
        await this.setState({name: value});
        await console.log("onSelectChange: ", this.state)
    }

    onInputChange = async (event) => {
        console.log(event.target)
        let name = event.target.name
        let value = document.getElementsByName(name)[0].value
        await this.setState({name:value})
        console.log(this.state)

        await console.log('props ', this.props)
        await console.log('props ', this.props.history)
    }

    handleSubmit = async (event) => {
        // event.persist();
        const form = event.currentTarget;
        event.preventDefault();

        console.log(event)
        console.log(form.elements)



        // const formData = new FormData();
        // formData.append('data_label',form.elements["data_label"].value);
        //
        //
        // // formData.append("info", this.state);
        // console.log(...formData);

        let formData = {
            name:this.state.name,
            length: this.state.length,
            system: this.state.system,
            PAM: this.state.PAM,
            organism: this.state.organism,
            chromosome: this.state.chromosome,

        }
        console.log('ready to send: ', formData)
        // let result = await this.upload(formData)
        // console.log(result)
        // this.props.history.push("/models/"+result.toString())

        this.props.history.push("/models/0")

    }

    upload = async (formData) => {
        const link = "https://europe-west3-webgene.cloudfunctions.net/postUserData"
        let result = await axios({
            url: link,
            method: 'post',
            data: formData
        });
        return result.data
    }

    render() {
        return (
            <div className={"bg-accent home-block-mine"} >
                <Container fluid>
                    <Row style={{paddingTop:"35px"}}/>
                    <Row className={"block-border"}>
                        <Col sm={7} className={"bg-main"}>
                            <Container fluid>
                                <Row className={"text-header"}  style={{paddingTop:"92px"}}>
                                    <Col sm={1}/>
                                    <Col sm={11} className={"bg-main text-color-main"}>
                                        <p>
                                            Our team
                                        </p>
                                    </Col>
                                </Row>

                                <TransitionGroup>

                                    <Row className={"text-main bg-main "} style={{paddingTop:"30px"}}>
                                        <Col sm={1}/>
                                        <Col sm={11} className={"text-color-main"}>

                                                {/*{this.state.isHoverLeft &&*/}
                                                {/*<CSSTransition timeout={this.state.timeout} classNames="opacity">*/}
                                                    <p className={""}>
                                                        Bioinformatists
                                                        <br/>Data Scientists
                                                        <br/>Fullstack Developers
                                                    </p>
                                        </Col>
                                    </Row>



                                        <Row className={"bg-main"} style={{paddingTop:"30px"}}>
                                            <Col sm={1}/>
                                            <Col sm={3}>
                                                {/*{this.state.isHoverLeft &&*/}
                                                {/*<CSSTransition timeout={this.state.timeout} classNames="opacity">*/}
                                                    <EmailBtn email={"pustoshilov.d@gmail.com"}/>
                                            </Col>

                                            <Col sm={3} className={"bg-main"}>
                                                {/*{this.state.isHoverLeft &&*/}
                                                {/*<CSSTransition timeout={this.state.timeout} classNames="opacity">*/}
                                                        <GitBtn/>
                                            </Col>
                                        </Row>
                                </TransitionGroup>
                             </Container>
                        </Col>
                        <Col sm={2} className={"bg-main text-color-main text-main"} style={{paddingTop:"30px"}}>
                            <Row style={{'paddingBottom':'100px'}}>
                                <p>Dmitry Pustoshilov</p>
                            </Row>
                            <Row style={{'paddingBottom':'100px'}}>
                                <p>Andrey Ivashkin</p>
                            </Row>
                            <Row style={{'paddingBottom':'100px'}}>
                                <p>Nikita Ionov</p>
                            </Row>
                            <Row style={{'paddingBottom':'100px'}}>
                                <p>Ksenia Petrova</p>
                            </Row>

                        </Col>

                        <Col sm={3} className={""}>
                            <Row>
                                <div className={"border-on-image"}>

                                    <img
                                        className={"home-block-image-team"}
                                        src={DmitryPhoto}
                                        alt={"Mine photo"}
                                        style={{filter: "drop-shadow(-40px 0px 5px #000000)"}}
                                    />
                                </div>
                            </Row>
                            <Row>
                                <div className={"border-on-image"}>

                                    <img
                                        className={"home-block-image-team"}
                                        src={AndreyPhoto}
                                        alt={"Mine photo"}
                                        style={{filter: "drop-shadow(-40px 0px 5px #000000)"}}
                                    />
                                </div>
                            </Row>
                            <Row>
                                <div className={"border-on-image"}>

                                    <img
                                        className={"home-block-image-team"}
                                        src={NikitaPhoto}
                                        alt={"Mine photo"}
                                        style={{filter: "drop-shadow(-40px 0px 5px #000000)"}}
                                    />
                                </div>
                            </Row>
                            <Row>
                                <div className={"border-on-image"}>

                                    <img
                                        className={"home-block-image-team"}
                                        src={KseniaPhoto}
                                        alt={"Mine photo"}
                                        style={{filter: "drop-shadow(-40px 0px 5px #000000)"}}
                                    />
                                </div>
                            </Row>

                        </Col>

                    </Row>

                    <Row style={{paddingTop:"35px"}}/>

                    <Row className={"block-border"}>
                        <Col sm={3} >
                            <CSSTransition in={this.state.inPropRight} timeout={this.state.timeout} classNames="shadow">
                                <img
                                    className={"home-block-image-dna"}
                                    src={dnaImage}
                                    alt={"Mine photo"}
                                    style={{filter: "drop-shadow(-40px 0px 5px #000000)"}}
                                />
                            </CSSTransition>
                        </Col>
                        <Col sm={9} className={"bg-main"}>
                            <Container fluid>
                                <Form validated={this.state.validated} onSubmit={this.handleSubmit}>
                                    <Row className={"text-header"} style={{paddingTop:"92px"}}>
                                        <Col sm={3}/>
                                        <Col sm={9} className={"bg-main text-color-main"}>
                                            <p>
                                                Design sgRNA
                                            </p>
                                        </Col>

                                    </Row>

                                    <Row className={"text-main"} style={{paddingTop:"30px"}}>
                                        <Col sm={3}/>
                                        <Col sm={8} className={"bg-main text-color-main"}>
                                            <CSSTransition in={this.state.inPropRight} timeout={this.state.timeout} classNames="opacity">
                                                <p>
                                                    Generate sgRNA for CRISPR with DeepCpf1
                                                </p>
                                            </CSSTransition>
                                        </Col>
                                        <Col sm={1}/>
                                    </Row>


                                    <Row className={"text-color-sub"}>
                                        <Col sm={3}/>
                                        <Col sm={4}>
                                            <Form.Group  controlId="">
                                                <Form.Label className={""}>Analyze name</Form.Label>
                                                <Form.Control
                                                    value={this.state.name}
                                                    onChange = {this.onInputChange}
                                                    name = {"name"}
                                                />
                                                {/*<Form.Text>Less than 200 characters</Form.Text>*/}
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row className={"text-color-sub"}>
                                        <Col sm={3}/>
                                        <Col sm={2}>
                                            <Form.Group controlId="">
                                                <Form.Label>CRISPR system</Form.Label>
                                                <Form.Control  as="select" name={"System"} required
                                                               value={this.state.system}
                                                               onChange={this.onSelectChange}>
                                                    <option value={"/Cas9"} disabled>/Cas9</option>
                                                    <option value={"/Cpf1"} >/Cpf1</option>
                                                </Form.Control >
                                            </Form.Group>
                                        </Col>
                                        <Col sm={2}>
                                            <Form.Group controlId="">
                                                <Form.Label>Organism</Form.Label>
                                                <Form.Control as="select" name={"Organism"} required
                                                              value={this.state.organism}
                                                              onChange={this.onSelectChange}>
                                                    <option value={"Covid-19"} disabled> Covid-19</option>
                                                    <option value={"Human"}>Human</option>
                                                </Form.Control>
                                            </Form.Group>
                                        </Col>
                                        <Col sm={2}>
                                            <Form.Group controlId="">
                                                <Form.Label>Chromosome</Form.Label>
                                                <Form.Control as="select" name={"Chromosome"} required
                                                              value={this.state.chromosome}
                                                              onChange={this.onSelectChange}>
                                                    <option value={"2"} disabled>2</option>
                                                    <option value={"1"}>1</option>
                                                </Form.Control>
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    <Row className={"text-color-sub"}>
                                        <Col sm={3}/>
                                        <Col sm={2}>
                                            <Form.Group controlId="formGroupEmail" >
                                                <Form.Label>sgRNA length</Form.Label>
                                                <Form.Control
                                                    value={this.state.length}
                                                    disabled required
                                                    onChange = {this.onInputChange}
                                                    name = {"length"}/>
                                            </Form.Group>
                                        </Col>
                                        <Col sm={2}>
                                            <Form.Group controlId="">
                                                <Form.Label>PAM</Form.Label>
                                                <Form.Control
                                                    value={this.state.PAM}
                                                    disabled required
                                                    onChange = {this.onInputChange}
                                                    name = {"PAM"}/>
                                            </Form.Group>
                                        </Col>

                                        <Col sm={2}>
                                            <CSSTransition in={this.state.inPropRight} timeout={this.state.timeout} classNames="opacity">
                                                <Button type={"submit"} className={"upload-button-wrapper"}>
                                                    <GoBtn />
                                                </Button>

                                            </CSSTransition>
                                        </Col>
                                    </Row>
                                </Form>

                                </Container>
                            </Col>
                        </Row>

                        <Row style={{paddingTop:"35px"}}/>

                </Container>


            </div>
        );
    }
}

export default withRouter(Home);