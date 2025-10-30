export default function TermosCondicoesCheckbox({ register, errors }) {
  return (
    <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          id="termos"
          className="mt-1 w-5 h-5 text-green-600 border-gray-300 rounded focus:ring-green-500"
          {...register('termos', {
            required: 'Você deve aceitar os termos e condições'
          })}
        />
        <label htmlFor="termos" className="text-sm text-gray-700 leading-relaxed">
          Eu li e aceito os{' '}
          <a href="#" className="text-green-600 hover:text-green-700 font-semibold underline">
            termos e condições
          </a>{' '}
          e a{' '}
          <a href="#" className="text-green-600 hover:text-green-700 font-semibold underline">
            política de privacidade
          </a>
        </label>
      </div>
      {errors.termos && (
        <p className="text-sm text-red-600 flex items-center gap-1 mt-2 ml-8">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          {errors.termos.message}
        </p>
      )}
    </div>
  )
}
