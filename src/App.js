import './App.css';
import Nav from './components/nav';
import Student from './components/Student';
import SchoolBoard from './components/SchoolBoard';
import BoardData from './components/BoardData';
import ContactCardMain from './components/ContactCardMain';
import ContactCardDetails from './components/ContactCardDetails';

function App() {
  const boardComponents = BoardData.map(board => {
    return (<SchoolBoard ID={board.ID} category={board.category} post={board.post} />);
  })

  // const BoardTable = () => {
  //   return (
  //     <table border={1}>
  //       <thead>
  //         <tr>
  //           <th>ID</th>
  //           <th>Category</th>
  //           <th>Post</th>
  //         </tr>
  //       </thead>
  //       <tbody>
  //         {boardComponents}
  //       </tbody>
  //     </table>
  //   );
  // };

  return (
    <div className="App" >
      <Nav />
      {/* <Header /> */}
      <main className="App-main" >
        {/* brute forcing */}
        {/* <table border={1}>
          <thead>
            <th>ID</th>
            <th>Category</th>
            <th>Post</th>
          </thead>
          <tbody>
            {boardComponents[0]}
            {boardComponents[1]}
            {boardComponents[2]}
            {boardComponents[3]}
            </tbody>
          </table> */}
        {/* Table */}
        {/* {BoardTable()} */}
      
          <ContactCardMain/>
          <Student/>
        {/* <SchoolBoard category="Current Events" post="Our Current Events today is... Coding REACTJS!" />
        <SchoolBoard category="Announcement" post="Our Announcement today is... Coding REACTJS!" />
        <SchoolBoard category="Quotes" post="Quotes of today... 'Coding REACTJS!'" />
        <SchoolBoard post="We will keep you updated to our latest... Coding REACTJS!" />
        <Greetings pangalan="Daryl Devon Umali Bacurin" />
        <Student />
        <FunctionComp />
        <ClassComp /> */}
      </main>
      {/* <Footer /> */}

    </div >

  );
}

export default App;
