import React, { useEffect, useState } from "react";
import { Modal } from "antd";

const SaleOfferModal: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  // Show the modal after 1 second
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsModalVisible(true);
    }, 1000); // 1 second delay

    return () => clearTimeout(timer);
  }, []);

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <Modal
      title={false}
      visible={isModalVisible}
      centered
      onOk={handleOk}
      onCancel={handleCancel}
      footer={null}
    >
      <div>
        <img src="../../../../saleBanner.jpg" alt="" />
      </div>
    </Modal>
  );
};

export default SaleOfferModal;
