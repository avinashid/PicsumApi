import Meta from "antd/es/card/Meta";
import { useState } from "react";
import { Button, Card, Image, Modal, Skeleton } from "antd";
import { FaDownload } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

const EachCard = ({ data, gray }) => {
  console.log(data);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [favourite, setFavourite] = useState(false);
  const [imageLoad, setImageLoad] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const grayImage = (img) => {
    return `https://picsum.photos/id/${img.id}/${img.width}/${img.height}?grayscale`;
  };
  return (
    <div className={`  ${hidden ? "scale-0 fixed" : "scale-100"} `}>
      <Card
        hoverable
        style={{ width: 240 }}
        cover={
          <>
            <Image
              alt={data.url}
              src={gray ? grayImage(data) : data.download_url}
              onLoad={() => setImageLoad(true)}
              style={{ display: imageLoad ? "block" : "none" }}
            />
            <Skeleton.Avatar
              active={"active"}
              style={{ display: !imageLoad ? "block" : "none" }}
              size={240}
              className="min-w-full"
              shape={"square"}
            />
          </>
        }
      >
        <div
          className={`absolute top-4 drop-shadow-md shadow-red-500  z-50 right-4 transition-all ${
            favourite ? "text-red-500 text-4xl " : "text-white text-3xl"
          }`}
          onClick={(e) => e.stopPropagation() || setFavourite(!favourite)}
        >
          <FaHeart />
        </div>
        <Meta title={data.author} description={data.url} />
        <hr className="my-2" />
        <div className="w-full flex justify-between px-3 items-center">
          <Button onClick={showModal}>Show info</Button>
          <a href={data.download_url}>
            <FaDownload className="text-green-500 cursor-pointer m-4 text-xl" />
          </a>
        </div>
        <Button
          className="self-center w-full mb-0"
          danger
          onClick={() => setHidden(true)}
        >
          Hide this image
        </Button>
      </Card>

      <Modal
        title="Image Details"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Return
          </Button>,

          <Button
            key="link"
            href={data.download_url}
            target="_blank"
            className="bg-blue-500"
            type="primary"
            onClick={handleOk}
          >
            <div className="flex gap-4">
              Download <FaDownload className="text-xl text-blue-100" />
            </div>
          </Button>,
        ]}
      >
        <div className="flex flex-col gap-2">
          <div>Id : {data.id}</div>
          <div>Author Name : {data.author}</div>
          <div>
            Photo Link : <a href={data.url}>{data.url}</a>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default EachCard;
