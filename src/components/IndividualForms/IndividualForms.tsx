import AllForms from "../AllForms/AllForms"

const IndividualForms = () => {
    localStorage.setItem('type', 'Individual');
  return (
    <div>
        <AllForms/>
    </div>
  )
}

export default IndividualForms