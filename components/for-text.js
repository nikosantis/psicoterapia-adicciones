export default function ForText({ wordsText }) {
  const animationDuration = 1.8
  const animationLength = animationDuration * wordsText.length
  const endOfAnimation = 100 / wordsText.length
  const animationOverlap = 0.1
  return (
    <div className='words-container'>
      <div className='words'>
        {wordsText.map((text, index) => (
          <span
            key={text}
            style={{
              animationDelay: index === 0 ? '1ms' : `${animationDuration * index}s`
            }}
          >
            {text}
          </span>
        ))}
      </div>
      <style jsx>
        {`
          .words-container {
            margin: auto;
            margin-top: 0;
            margin-bottom: 0;
            line-height: 1.2em;
            position: relative;
            pointer-events: none;
          }

          .words {
            width: 100%;
            height: 2.8em;
            display: block;
            margin-top: 1rem;
            margin-bottom: 0;
          }

          @keyframes slide-word {
            0% {
              opacity: 0;
              transform: translate3d(10px, 25%, 0px);
              visibility: visible;
            }
            ${1 - 1 * animationOverlap}% {
              opacity: 1;
              transform: translate3d(10px, 75%, 0px);
            }
            ${endOfAnimation}% {
              opacity: 1;
              transform: translate3d(10px, 75%, 0px);
              visibility: visible;
            }
            ${endOfAnimation + endOfAnimation * animationOverlap}% {
              opacity: 0;
              transform: translate3d(10px, 135%, 0px);
              visibility: hidden;
            }
            100% {
              opacity: 0;
              visibility: visible;
            }
          }

          .words span {
            position: absolute;
            opacity: 0;
            overflow: hidden;
            animation: slide-word ${animationLength}s linear infinite 0s;
            animation-timing-function: cubic-bezier(0.19, 0.82, 0.84, 1.06);
            font-weight: 300;
            letter-spacing: 0.7px;
          }
        `}
      </style>
    </div>
  )
}
