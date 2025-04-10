import Logo from '../../components/Logo/Logo'

const Login = () => {
  return (
    <section className='w-full h-screen flex justify-center items-center flex-col'>
        <section className='flex justify-center items-center flex-col'>
            <Logo width='60' />
            <p>Conectando fornecedores e processos</p>
        </section>
        
        <section className='w-120 h-110 rounded-xl shadow-xl p-8'>
            <h1>Teste</h1>
        </section>
    </section>
  )
}

export default Login