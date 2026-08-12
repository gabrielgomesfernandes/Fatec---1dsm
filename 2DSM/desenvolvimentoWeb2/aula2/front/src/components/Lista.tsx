type ListaProps = {
  items: string[];
};

export default function Lista(props: ListaProps) {
  const res = props.items.map((element, index) => (
    <li key={index}>{element}</li>
  ));

  return <ol> {res} </ol>;
}
