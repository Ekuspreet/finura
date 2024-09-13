import Stories from "react-insta-stories";
import {
  Modal,
  ModalContent,
  //   ModalHeader,
  ModalBody,
  //   ModalFooter,
  //   Button,
  useDisclosure,
} from "@nextui-org/react";
import { Avatar } from "@nextui-org/react";
import { Tooltip } from "@nextui-org/react";
import PropTypes from "prop-types";

const StoryCircle = ({ brand, key }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      {console.log("brand.brand_name")}
      {console.log(brand.brand_name)}
      <Tooltip content={brand.brand_name}>
        <Avatar
          onClick={onOpen}
          isBordered
          color="success"
          src={brand.avatar}
          key={key}
        />
      </Tooltip>

      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        className="bg-transparent"
      >
        <ModalContent>
          <ModalBody>
            <div className="flex items-center justify-center">
              <div className="absolute left-0 h-8 w-8 rounded-full bg-red-600">
                &lt;-
              </div>
              <Stories
                stories={brand.stories}
                defaultInterval={1500}
                // width={432}
                // height={768}
              />
              <div className="absolute right-0 h-8 w-8 rounded-full bg-green-600">
                &gt;
              </div>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

StoryCircle.propTypes = {
  brand: PropTypes.shape({
    brand_name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stories: PropTypes.arrayOf(
      PropTypes.shape({
        url: PropTypes.string.isRequired,
        duration: PropTypes.number.isRequired,
        header: PropTypes.shape({
          heading: PropTypes.string,
          subheading: PropTypes.string,
        }),
        // seeMore: PropTypes.func,
      })
    ).isRequired,
  }),
  key: PropTypes.number.isRequired,
};

export default StoryCircle;
