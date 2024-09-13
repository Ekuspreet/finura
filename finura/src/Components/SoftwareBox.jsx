import { Card, CardBody, Image } from "@nextui-org/react";
import PropTypes from "prop-types";

const SoftwareBox = ({ index, name, url }) => {
  return (
    <div>
      <Card key={index} className="w-fit px-2 py-4">
        <div className="text-tiny font-semibold md:text-large">{name}</div>
        <CardBody className="overflow-visible py-2">
          <Image
            alt="Card background"
            className="w-20 rounded-xl object-cover md:w-36"
            src={url}
          />
        </CardBody>
      </Card>
    </div>
  );
};

SoftwareBox.propTypes = {
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default SoftwareBox;
