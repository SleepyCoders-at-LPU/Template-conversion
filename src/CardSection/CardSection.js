import Card from './Card';

const CardSection = () => {
    return(
        <section className="contact bg-success ">
        <div className="container ">
          <h2 className="text-white">
            We love new friends!
          </h2>
          <div className="row">
            <Card 
            cardTitle="Instagram"
            cardDescription="Follow us on Instagram"
            btnText="Follow"
            />
            <Card 
            cardTitle="Facebook"
            cardDescription="Like us on Facebook"
            btnText="Like"
            />
            <Card 
            cardTitle="Twitter"
            cardDescription="Follow us on Twitter"
            btnText="Tweet"
            />
          </div>
        </div>
      </section>
    )
}
export default CardSection;