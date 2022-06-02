import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";

const TaleCard = (props) => {
  console.log(props);

  return (
    <Card className="w-96 mt-6">
      <CardHeader color="blue" className="relative h-56">
        <img
          src={props.imgurl}
          alt="img-blur-shadow"
          className="w-full h-full"
        />
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h5" className="mb-2">
          {props.title}
        </Typography>
        <Typography>{props.text}</Typography>
      </CardBody>
      <CardFooter divider className="flex items-center justify-between py-3">
        <Typography variant="small">{props.id}</Typography>
        <Typography variant="small" color="grey" className="flex gap-1">
          <i className="fas fa-map-marker-alt fa-sm mt-[3px]" />
          {props.author}
        </Typography>
      </CardFooter>
    </Card>
  );
};

export default TaleCard;
