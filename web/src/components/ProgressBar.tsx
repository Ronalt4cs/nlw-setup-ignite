interface ProgressBarProps {
   progress: number
}

export function ProgressBar(props: ProgressBarProps) {
   return (
      <div className="h-3 rounded-xl mt-4 w-full bg-zinc-700">
         <div
            role="progressbar"
            aria-label="Progressos de hábitos completados nesse dia"
            aria-valuenow={props.progress}
            className="h-3 rounded-xl  bg-violet-600"
            style={{
               width: `${props.progress}%`
            }}
         />
      </div>
   )
}