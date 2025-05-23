import { Flex } from '@chakra-ui/react'
import Logo from '../../components/Logo/Logo'

const Login = () => {
  return (
    <>
      <Flex justify='center' direction='column' align='center'
        paddingX='6' paddingY='12' >
        <Flex direction='column' align='center' justify='center' gap='2' marginBottom='5'>
          <Logo />
          <p className="mt-3 text-center tracking-tight">
            Conectando fornecedores e processos
          </p>
        </Flex>

        <Flex marginTop='7' shadow='xl' width='450px' height='350px' rounded='xl' direction='column' padding='5'>
          <div className='mb-[15px]'>
            <h5 className='text-xl font-semibold'>Entrar</h5>
            <p className='text-sm'>Seja muito bem-vindo ao Supplier+</p>
          </div>
          <form action="#" method="POST" className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                E-mail
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#4BA2E4] sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                  Token
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="token"
                  name="token"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#4BA2E4] sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-[20px] bg-[#52B4FF] px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-[#4BA2E4] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Entrar
              </button>
            </div>
          </form>
        </Flex>
      </Flex>
    </>

  )
}

export default Login