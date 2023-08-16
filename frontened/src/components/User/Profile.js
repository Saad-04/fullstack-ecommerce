import React, { useState } from 'react';
import { Avatar, Col, Divider, Drawer, List, Row } from 'antd';
import { useSelector } from 'react-redux';
// here is one line discription components 
const DescriptionItem = ({ title, content }) => (
  <div className="site-description-item-profile-wrapper">
    <p className="site-description-item-profile-p-label text-red-800 font-roboto">{title}: <span className='text-black' >{content?content:'------'}</span></p>
   
  </div>
);

// main app start from here 
const App = () => {
  const { user, isAuthenticated } = useSelector((state) => state.users)
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <List
        dataSource={[
          {
            id: 1,
            name: 'Lily',
          }
        ]}
        bordered
        renderItem={(item) => (
          <List.Item
            key={item.id}
            actions={[
              <a onClick={showDrawer} key={`a-${item.id}`}>
                View Profile
              </a>,
            ]}
          >
            <List.Item.Meta
              avatar={
                <Avatar src={user?.avatar?.url}/>
              }
              title={<a href="https://ant.design/index-cn">{item.name}</a>}
              description="Progresser XTech"
            />
          </List.Item>
        )}
      />
      <Drawer width={640} placement="right" closable={false} onClose={onClose} open={open}>
        <p className='font-bold bg-black text-white inline px-1 hover:text-yellow-400 cursor-pointer' onClick={onClose} >X</p>
        <p
          className="site-description-item-profile-p"
          style={{
            marginBottom: 24,
          }}
        >
          User Profile
        </p>
        <p className="site-description-item-profile-p">Personal</p>
        <Row>
          <Col span={12}>
            <DescriptionItem title="Full Name" content={user?.name} />
          </Col>
          <Col span={12}>
            <DescriptionItem title="Account" content={user?.email} />
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <DescriptionItem title="City" content="HangZhou" />
          </Col>
          <Col span={12}>
            <DescriptionItem title="Country" content="China🇨🇳" />
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <DescriptionItem title="Birthday" content="February 2,1900" />
          </Col>
          <Col span={12}>
            <DescriptionItem title="Website" content="-" />
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <DescriptionItem
              title="Message"
              content="Make things as simple as possible but no simpler."
            />
          </Col>
        </Row>
        <Divider />
        <p className="site-description-item-profile-p">Company</p>
        <Row>
          <Col span={12}>
            <DescriptionItem title="Position" content="Programmer" />
          </Col>
          <Col span={12}>
            <DescriptionItem title="Responsibilities" content="Coding" />
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <DescriptionItem title="Department" content="XTech" />
          </Col>
          <Col span={12}>
            <DescriptionItem title="Supervisor" content={<a>Lin</a>} />
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <DescriptionItem
              title="Skills"
              content="C / C + +, data structures, software engineering, operating systems, computer networks, databases, compiler theory, computer architecture, Microcomputer Principle and Interface Technology, Computer English, Java, ASP, etc."
            />
          </Col>
        </Row>
        <Divider />
        <p className="site-description-item-profile-p">Contacts</p>
        <Row>
          <Col span={12}>
            <DescriptionItem title="Email" content={<a href="mailto:asaad4674@gmail.com">asaad4674@gmail.com</a>}/>
          </Col>
          <Col span={12}>
            <DescriptionItem title="Phone Number" content={<a href="tel:0302-0151295">Call us at 0302-0151295</a>} />
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <DescriptionItem
              title="Github"
              content={
                <a href="https://github.com/Saad-04">
                github.com/Saad-04
                </a>
              }
            />
          </Col>
        </Row>
      </Drawer>
    </>
  );
};
export default App;