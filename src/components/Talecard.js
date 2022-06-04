import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";

const TaleCard = (props) => {
  console.log(props);
  console.log(props.imgbs64);

  const onTaleCardClick = (e) => {
    console.log(e);
  };

  // src={props.imgurl}
  return (
    <Card color="light-blue" className="w-96 mt-6" onClick={onTaleCardClick}>
      <CardHeader color="blue-grey" className="relative h-56">
        <img
          src={`data:image/png;base64,${props.imgbs64}`}
          alt="img-blur-shadow"
          className="w-full h-full"
        />
      </CardHeader>
      <CardBody className="text-center max-h-80">
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
