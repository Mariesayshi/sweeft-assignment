import classes from "./Header.module.css";

const Header = (props) => {
  let data = props.detailedUserData;
  return (
    <div className={classes.headerContainer}>
      <img className={classes.userImg} src={`${data.imageUrl}?v=${data.id}`} />
      <fieldset className={classes.generalInfo}>
        <legend>Info</legend>
        <h4 className={classes.userName}>{`${data.prefix} ${data.name} ${data.lastName}`}</h4>
        <p className={classes.title}>{data.title}</p>

        <p><span className={classes.infoHeader}>Email:</span> <span className="emailContent"> {data.email}</span></p>
        <p><span className={classes.infoHeader}>Ip Address:</span> <span className="ipAddressContent"> {data.ip}</span></p>
        <p><span className={classes.infoHeader}>Job Area:</span> <span className="jobAreaContent"> {data.jobArea}</span></p>
        <p><span className={classes.infoHeader}>Job Type:</span> <span className="jobTypeContent"> {data.jobType}</span></p>

      </fieldset>
      <fieldset className={classes.addressInfo}>
        <legend>Address</legend>
        <h4 className={classes.company}>{`${data.company.name} ${data.company.suffix}`}</h4>


        <p><span className={classes.infoHeader}>City:</span><span className="cityContent"> {data.address.city}</span></p>
        <p><span className={classes.infoHeader}>Country:</span><span className="countryContent"> {data.address.country}</span></p>
        <p><span className={classes.infoHeader}>State:</span><span className="StateContent"> {data.address.state}</span></p>
        <p><span className={classes.infoHeader}>Street Address:</span><span className="StreetContent"> {data.address.streetAddress}</span></p>
        <p><span className={classes.infoHeader}>ZIP:</span><span className="zipContent"> {data.address.zipCode}</span></p>

      </fieldset>
    </div>
  );
};

export default Header;
