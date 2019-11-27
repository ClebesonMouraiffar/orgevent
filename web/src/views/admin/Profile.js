import React from "react";

// reactstrap components
import {
    Row,
    Col,
    Card,
    CardHeader,
    CardBody,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup
} from "reactstrap";

// core components

function BestEvent() {
    const [firstFocus, setFirstFocus] = React.useState(false);
    const [lastFocus, setLastFocus] = React.useState(false);
    return (
        <>
            <Row>
                <Col md="8">
                    <Card>
                        <CardHeader>
                            <h5 className="title">Perfil</h5> 
                            <button className="btn-round btn btn-warning btn-sm">
                                Editar
                                </button>
                            <button className="btn-round btn btn-info btn-sm " disabled>
                                Salvar
                                </button>                       
                        </CardHeader>
                        <CardBody>
                            <Form action="" className="form" method="">
                                <Row>
                                    <Col md="6">
                                        <InputGroup
                                            className={
                                                "no-border input-lg" +
                                                (firstFocus ? " input-group-focus" : "")
                                            }
                                        >
                                            <InputGroupAddon addonType="prepend">
                                                <InputGroupText>
                                                    <i className="now-ui-icons users_single-02"></i>
                                                </InputGroupText>
                                            </InputGroupAddon>
                                            <Input
                                                placeholder="Vive La Vie"
                                                type="text"
                                                onFocus={() => setFirstFocus(true)}
                                                onBlur={() => setFirstFocus(false)}
                                                disabled                                        
                                            ></Input>
                                        </InputGroup>
                                    </Col>
                                    <Col md="6">
                                        <InputGroup
                                            className={
                                                "no-border input-lg" +
                                                (firstFocus ? " input-group-focus" : "")
                                            }
                                        >
                                            <InputGroupAddon addonType="prepend">
                                                <InputGroupText>
                                                    <i className="now-ui-icons users_circle-08"></i>
                                                </InputGroupText>
                                            </InputGroupAddon>
                                            <Input
                                                placeholder="Club"
                                                type="text"
                                                onFocus={() => setFirstFocus(true)}
                                                onBlur={() => setFirstFocus(false)}
                                                disabled
                                            ></Input>
                                        </InputGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md="7">
                                        <InputGroup
                                            className={
                                                "no-border input-lg" +
                                                (firstFocus ? " input-group-focus" : "")
                                            }
                                        >
                                            <InputGroupAddon addonType="prepend">
                                                <InputGroupText>
                                                    <i className="now-ui-icons ui1_email-85"></i>
                                                </InputGroupText>
                                            </InputGroupAddon>
                                            <Input
                                                placeholder="recepcao@vivelavie.com.br"
                                                type="text"
                                                onFocus={() => setFirstFocus(true)}
                                                onBlur={() => setFirstFocus(false)}
                                                disabled
                                            ></Input>
                                        </InputGroup>
                                    </Col>
                                    <Col md="5">
                                        <InputGroup
                                            className={
                                                "no-border input-lg" +
                                                (firstFocus ? " input-group-focus" : "")
                                            }
                                        >
                                            <InputGroupAddon addonType="prepend">
                                                <InputGroupText>
                                                    <i className="now-ui-icons tech_mobile"></i>
                                                </InputGroupText>
                                            </InputGroupAddon>
                                            <Input
                                                placeholder="(55)9 9999-0000"
                                                type="text"
                                                onFocus={() => setFirstFocus(true)}
                                                onBlur={() => setFirstFocus(false)}
                                                disabled
                                            ></Input>
                                        </InputGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md="12">
                                        <InputGroup
                                            className={
                                                "no-border input-lg" +
                                                (firstFocus ? " input-group-focus" : "")
                                            }
                                        >
                                            <InputGroupAddon addonType="prepend">
                                                <InputGroupText>
                                                    <i className="now-ui-icons location_pin"></i>
                                                </InputGroupText>
                                            </InputGroupAddon>
                                            <Input
                                                placeholder="R. Hermann Faulhaber, 113 - Centro, Panambi - RS"
                                                type="text"
                                                onFocus={() => setFirstFocus(true)}
                                                onBlur={() => setFirstFocus(false)}
                                                disabled
                                            ></Input>
                                        </InputGroup>
                                    </Col>                                    
                                </Row>                                
                                <Row>
                                    <Col md="7">
                                        <InputGroup
                                            className={
                                                "no-border input-lg" +
                                                (firstFocus ? " input-group-focus" : "")
                                            }
                                        >
                                            <InputGroupAddon addonType="prepend">
                                                <InputGroupText>
                                                    <i className="now-ui-icons files_paper"></i>
                                                </InputGroupText>
                                            </InputGroupAddon>
                                            <Input
                                                placeholder="
                                                Festa: ato de celebrar, comemorar, agradecer, cantar, rir e se emocionar. 
                                                Exibir seu amor pela vida. Prazer de viver com vontade, de verdade, pra valer... 
                                                Esse é o espírito da VIVE LA VIE! Vamos celebrar.. 
                                                vamos VIVER A VIDA!!"
                                                type="textarea"
                                                onFocus={() => setFirstFocus(true)}
                                                onBlur={() => setFirstFocus(false)}
                                                disabled
                                            ></Input>
                                        </InputGroup>
                                    </Col>
                                    <Col md="5">
                                        <InputGroup
                                            className={
                                                "no-border input-lg" +
                                                (firstFocus ? " input-group-focus" : "")
                                            }
                                        >
                                            <InputGroupAddon addonType="prepend">
                                                <InputGroupText>
                                                    <i className="now-ui-icons travel_info"></i>
                                                </InputGroupText>
                                            </InputGroupAddon>
                                            <Input
                                                placeholder="
                                                Abertura da Casa:
                                                1 hora antes da abertura dos shows."
                                                type="textarea"
                                                onFocus={() => setFirstFocus(true)}
                                                onBlur={() => setFirstFocus(false)}
                                                disabled
                                            ></Input>
                                        </InputGroup>
                                    </Col>
                                </Row>
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
                <Col md="4">
                    <Card className="card-user">
                        <div className="image">
                            <img alt="..." src={require("assets/img/profile.jpg")}></img>
                        </div>
                        <CardBody>
                            <div className="author">
                                <a href="#">
                                    <img className="avatar border-gray" src={require("assets/img/vivelavie.png")} alt="..."></img>
                                    <h5 className="title">Vive la Vie</h5>
                                </a>
                                <p class="description">
                                    Club
                                </p>
                            </div>

                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </>
    );
}

export default BestEvent;