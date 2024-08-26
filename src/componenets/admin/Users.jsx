import React from 'react'
// import profileImage from '../../assets/bg.jpg'
import profileImage from '../../assets/profile.PNG'
const Users = () => {
    const arr=[1,2,3,4]
  return (
    <section className='tableClass'>

    <main>
        <table>
            <thead>
                <tr>
                    <th>User Id </th>
                    <th>Name </th>
                    <th> Photo</th>
                    <th>Role</th>
                    <th>Since</th>
                  
                </tr>
            </thead>
            <tbody>
               {
                arr.map(i=>(
                    <tr key={i}>
                    <td>#isjidoasjdo</td>
                    <td>Md Tamim Ghazali</td>
                    <td>
                        <img src={profileImage} alt="User" />
                    </td>
                    <td>Admin</td>
                    <td>{"2022-8-22"}</td>
                 
                   

                </tr>
                ))
               }
            </tbody>
        </table>
    </main>

</section>
   
  )
}

export default Users
