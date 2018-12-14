import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './Formulario.css'

export default class Formulario extends React.Component {
  render() {
    return (
      <Form className='form'>
      <FormGroup row> 
      <Label className='destaque'>Entre em contato</Label>
      </FormGroup>
        <FormGroup row>
          <Label for="exampleEmail" sm={2}>Email</Label>
          <Col sm={10}>
            <Input type="email" name="email" id="exampleEmail" placeholder="Seu e-mail" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="name" sm={2}>Nome</Label>
          <Col sm={10}>
            <Input type="name" name="password" id="examplePassword" placeholder="Seu Nome" />
          </Col>
        </FormGroup>
        <FormGroup tag="fieldset" row>
        <legend className="col-form-label col-sm-2">Você deseja:</legend>
        <Col sm={10}>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio2" />{' '}
              Receber informações sobre novos eventos
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio2" />{' '}
              Cadastrar um evento
            </Label>
          </FormGroup>
        </Col>
      </FormGroup>
        <FormGroup>
        <Label for="exampleSelectMulti">Área - Evento</Label>
        <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple>
          <option>Tecnologia</option>
          <option>Ambiental</option>
          <option>Empreendorismo</option>
          <option>Saúde</option>
          <option>Moda</option>
          <option>Outros</option>
        </Input>
      </FormGroup>
        <FormGroup row>
          <Label for="exampleText" sm={2}>Algo a mais?</Label>
          <Col sm={10}>
            <Input type="textarea" name="text" id="exampleText" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleFile" sm={2}>Arquivo</Label>
          <Col sm={10}>
            <Input type="file" name="file" id="exampleFile" />
            <FormText color="muted">
              This is some placeholder block-level help text for the above input.
              It's a bit lighter and easily wraps to a new line.
            </FormText>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="checkbox2" sm={2}>Checkbox</Label>
          <Col sm={{ size: 10 }}>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" id="checkbox2" />{' '}
                Check me out
              </Label>
            </FormGroup>
          </Col>
        </FormGroup>
        <FormGroup check row>
          <Col sm={{ size: 10, offset: 2 }}>
            <Button>Submit</Button>
          </Col>
        </FormGroup>
      </Form>
    );
  }
}