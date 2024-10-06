import React, { Fragment, useState, useCallback } from 'react';

import {
  Button,
  Modal,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Form,
  FormGroup,
  Input,
  Label,
} from 'reactstrap';

import config from '../config/index.json';

const ModalForm = () => {
  const { mainHero } = config;
  const [visible, setVisible] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    document: '',
    phone: '',
  });
  const toggle = () => {
    setVisible(!visible);
  };
  const onChange = useCallback(
    (e) => {
      const newState: {} = userInfo;
      // @ts-ignore
      newState[e.target.name] = e.target.value;
      // @ts-ignore
      setUserInfo(newState);
      console.log(userInfo);
    },
    [userInfo]
  );
  const defaultIfEmpty = (value: string) => {
    return value === '' ? '' : value;
  };

  return (
    <Fragment>
      <div onClick={toggle} className="mt-3 sm:mt-0 sm:ml-3">
        <p
          className={`w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md border-primary text-secondary bg-background hover:bg-border hover:text-primary md:py-4 md:text-lg md:px-10`}
        >
          {mainHero.secondaryAction.text}
        </p>
      </div>
      <Modal isOpen={visible} toggle={toggle} style={{ width: '300px' }}>
        <ModalHeader style={{ justifyContent: 'center' }}>
          Связаться с нами
        </ModalHeader>
        <ModalBody>
          <Form
            onSubmit={() => {
              console.log('youuuu');
            }}
          >
            <FormGroup>
              <Label for="name">Name:</Label>
              <Input
                type="text"
                name="name"
                onChange={onChange}
                defaultValue={defaultIfEmpty(userInfo.name)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                type="email"
                name="email"
                onChange={onChange}
                defaultValue={defaultIfEmpty(userInfo.email)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="document">Document:</Label>
              <Input
                type="text"
                name="document"
                onChange={onChange}
                defaultValue={defaultIfEmpty(userInfo.document)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="phone">Phone:</Label>
              <Input
                type="text"
                name="phone"
                onChange={onChange}
                defaultValue={defaultIfEmpty(userInfo.phone)}
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter
          style={{ display: 'flex', justifyContent: 'space-between' }}
        >
          <Button
            type="button"
            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md border-primary text-secondary bg-background hover:bg-border hover:text-primary md:py-4 md:text-lg md:px-10"
            onClick={() => console.log('click')}
            color="primary"
          >
            Написать
          </Button>
          <Button
            type="button"
            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md border-primary text-secondary bg-background hover:bg-border hover:text-primary md:py-4 md:text-lg md:px-10"
            onClick={() => toggle()}
          >
            Отмена
          </Button>
        </ModalFooter>
      </Modal>
    </Fragment>
  );
};
export default ModalForm;
