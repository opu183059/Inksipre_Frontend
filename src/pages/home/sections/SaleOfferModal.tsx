import React, { useEffect, useState } from "react";
import { Modal } from "antd";

const SaleOfferModal: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsModalVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleOkandClose = () => {
    setIsModalVisible(false);
  };

  return (
    <Modal
      title={false}
      open={isModalVisible}
      centered
      onOk={handleOkandClose}
      onCancel={handleOkandClose}
      footer={null}
      className="saleModal"
    >
      <div>
        <img src="../../../../saleBanner.jpg" alt="50% sale at inkspire" />
      </div>
    </Modal>
  );
};

export default SaleOfferModal;
