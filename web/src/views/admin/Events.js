import React from "react";

// reactstrap components
import {
    Table,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Label,
    Row,
    Col
} from "reactstrap";

// core components

function BestEvent() {
    const [modal, setModal] = React.useState(false);

    const toggle = () => setModal(!modal);

    const [firstFocus, setFirstFocus] = React.useState(false);
    const [lastFocus, setLastFocus] = React.useState(false);
    return (
        <>
            <button className="btn-round btn btn-info" onClick={toggle}>
                Adicionar
                        </button>
            <Table striped>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Evento</th>
                        <th>Inicio</th>
                        <th>Fim</th>
                        <th>ações</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">
                            1
                              </th>
                        <td>LUMI</td>
                        <td>23 Nov às 00:00</td>
                        <td>24 Nov às 06:00</td>
                        <td>
                            <button className="btn-round btn btn-warning btn-sm" onClick={toggle}>
                                Editar
                                </button>
                            <button className="btn-round btn btn-danger btn-sm" >
                                Excluir
                                </button>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">
                            2
                              </th>
                        <td>LUMI</td>
                        <td>23 Nov às 00:00</td>
                        <td>24 Nov às 06:00</td>
                        <td>
                            <button className="btn-round btn btn-warning btn-sm" onClick={toggle}>
                                Editar
                                </button>
                            <button className="btn-round btn btn-danger btn-sm ">
                                Excluir
                                </button>
                        </td>
                    </tr>
                </tbody>
            </Table>
            <Modal isOpen={modal} toggle={toggle} >
                <ModalHeader toggle={toggle}>Evento</ModalHeader>
                <ModalBody>
                    <Form action="" className="form" method="">
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
                                placeholder="Nome..."
                                type="text"
                                onFocus={() => setFirstFocus(true)}
                                onBlur={() => setFirstFocus(false)}
                            ></Input>
                        </InputGroup>
                        <Row>
                            <Col sm="7">
                                <InputGroup
                                    className={
                                        "no-border input-lg" +
                                        (firstFocus ? " input-group-focus" : "")
                                    }
                                >
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            <i className="now-ui-icons ui-1_calendar-60"></i>
                                            Inicio
                    </InputGroupText>
                                    </InputGroupAddon>
                                    <Input
                                        placeholder="Data Inicio..."
                                        type="date"
                                        onFocus={() => setFirstFocus(true)}
                                        onBlur={() => setFirstFocus(false)}
                                    ></Input>
                                </InputGroup>
                            </Col>
                            <Col sm="5">
                                <InputGroup
                                    className={
                                        "no-border input-lg" +
                                        (firstFocus ? " input-group-focus" : "")
                                    }
                                >
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            <i className="now-ui-icons ui-2_time-alarm"></i>
                                            Inicio
                    </InputGroupText>
                                    </InputGroupAddon>
                                    <Input
                                        placeholder="Data Fim..."
                                        type="time"
                                        onFocus={() => setFirstFocus(true)}
                                        onBlur={() => setFirstFocus(false)}
                                    ></Input>
                                </InputGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm="7">
                                <InputGroup
                                    className={
                                        "no-border input-lg" +
                                        (firstFocus ? " input-group-focus" : "")
                                    }
                                >
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            <i className="now-ui-icons ui-1_calendar-60"></i>
                                            Fim
                    </InputGroupText>
                                    </InputGroupAddon>
                                    <Input
                                        placeholder="Data Inicio..."
                                        type="date"
                                        onFocus={() => setFirstFocus(true)}
                                        onBlur={() => setFirstFocus(false)}
                                    ></Input>
                                </InputGroup>
                            </Col>
                            <Col sm="5">
                                <InputGroup
                                    className={
                                        "no-border input-lg" +
                                        (firstFocus ? " input-group-focus" : "")
                                    }
                                >
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            <i className="now-ui-icons ui-2_time-alarm"></i>
                                            Fim
                    </InputGroupText>
                                    </InputGroupAddon>
                                    <Input
                                        type="time"
                                        onFocus={() => setFirstFocus(true)}
                                        onBlur={() => setFirstFocus(false)}
                                    ></Input>
                                </InputGroup>
                            </Col>
                        </Row>
                        <InputGroup
                            className={
                                "no-border input-lg" +
                                (lastFocus ? " input-group-focus" : "")
                            }
                        >
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                    <i className="now-ui-icons files_paper"></i>
                                </InputGroupText>
                            </InputGroupAddon>
                            <Input
                                placeholder="Descrição..."
                                type="textarea"
                                onFocus={() => setLastFocus(true)}
                                onBlur={() => setLastFocus(false)}
                            ></Input>
                        </InputGroup>
                        <button className="btn-round btn btn-info" onClick={toggle}>Salvar</button>
                    </Form>
                </ModalBody>
                <ModalFooter>

                </ModalFooter>
            </Modal>
        </>
    );
}

export default BestEvent;