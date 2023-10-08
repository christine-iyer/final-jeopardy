export default function Category({ jeopardyQuest }) {
     
     return (
          <div className="category"><h1>Category: <span>{jeopardyQuest && jeopardyQuest.question ? (
               <span>{jeopardyQuest.category.title.toUpperCase()}</span>
          ) : (
               ""
          )}</span> </h1>
          </div>
     )
}





