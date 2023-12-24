import usePersistedStore from '@/store'
import Character from './character'
import { useGetResults } from '@/shared/hooks/useGetResults'

type ResultCardProps = {
  tooltipId: string
  tooltipContent: string
  tooltipPlace: 'bottom' | 'top' | 'left' | 'right'
  title: string
  results: string
}

type ResultProps = {
  countdown: number
  totalCharacterTyped: string
  totalWord: string
  count: number
}

const ResultCard = ({
  title,
  tooltipId,
  tooltipContent,
  tooltipPlace,
  results
}: ResultCardProps) => {
  const { theme } = usePersistedStore()

  return (
    <div
      className='flex w-full cursor-pointer flex-col items-center justify-center gap-2 rounded-lg p-5'
      data-tooltip-content={tooltipContent}
      data-tooltip-id={tooltipId}
      data-tooltip-place={tooltipPlace}
      style={{
        backgroundColor: theme.background.secondary
      }}
    >
      <h2 className='text-3xl'>{title}</h2>
      <p
        className='text-center text-3xl'
        style={{
          color: theme.text.secondary
        }}
      >
        {results}
      </p>
    </div>
  )
}

const Results = ({
  countdown,
  totalCharacterTyped,
  totalWord,
  count
}: ResultProps) => {
  const { theme } = usePersistedStore()

  const { history, results } = useGetResults({
    countdown,
    time: count,
    totalCharacterTyped,
    totalWord
  })
  return (
    <div
      className='mx-auto flex h-full w-[95%] flex-col gap-10 pb-10 pt-8 font-mono'
      style={{
        color: theme.text.primary
      }}
    >
      <div
        className='flex-[3] px-5 py-7'
        style={{
          backgroundColor: theme.background.primary
        }}
      >
        <div className='grid grid-flow-col grid-rows-6 justify-center gap-4 sm:grid-rows-4 sm:justify-normal lg:grid-rows-2 lg:justify-normal lg:gap-10 '>
          <ResultCard
            title='wpm/cpm'
            tooltipId='wpm'
            tooltipContent='words per minute / characters per minute'
            tooltipPlace='top'
            results={`${results.wpm} / ${results.cpm}`}
          />
          <ResultCard
            title='acc.'
            tooltipId='accuracy'
            tooltipContent='accuracy percentage'
            tooltipPlace='bottom'
            results={`${Math.round(results.accuracy)}%`}
          />
          <ResultCard
            title='character'
            tooltipId='character'
            tooltipContent='correct/incorrect'
            tooltipPlace='top'
            results={`${Math.round(
              history.typedHistory.length * (results.accuracy / 100)
            )} / ${Math.round(
              history.typedHistory.length * (results.error / 100)
            )}`}
          />
          <ResultCard
            title='err.'
            tooltipId='error'
            tooltipContent='error percentage'
            tooltipPlace='bottom'
            results={`${Math.round(results.error)}%`}
          />
          <ResultCard
            title='time'
            tooltipId='time'
            tooltipContent='time taken to complete the test'
            tooltipPlace='top'
            results={`${count / 1000}s`}
          />
          <ResultCard
            title='total'
            tooltipId='total'
            tooltipContent='total character typed'
            tooltipPlace='bottom'
            results={`${history.typedHistory.length}`}
          />
        </div>
      </div>

      <div className='flex-[3] px-5'>
        <div className='mt-3 text-lg lg:text-xl'>
          {history.typedHistory.split('').map((char, index) => {
            return (
              <Character
                key={index + char}
                character={history.wordHistory[index]}
                state={history.wordHistory[index] === char}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Results
