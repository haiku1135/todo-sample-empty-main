import { NextPage } from 'next';

import Button from '@/components/common/parts/Button';
import { useTodoApp } from '@/hooks/useTodoApp';

const Page: NextPage = () => {
  const {
    taskLabel,
    taskList,
    handleChangeTaskLabel,
    handleAddTask,
    handleCompleteTask,
    handleDeleteTask,
  } = useTodoApp();
  return (
    <div className="mx-auto mt-10 max-w-4xl">
      <div className="flex justify-center">
        <div>
          {/* 入力フォーム */}
          <div>
            <input
              className="rounded-md border px-3 py-2 outline-none"
              type="text"
              placeholder="タスクを入力"
              value={taskLabel}
              onChange={handleChangeTaskLabel}
            />
            <Button onClick={handleAddTask} label="追加" variant="primary" className="mt-4" />
          </div>

          {/* タスク表示 */}
          <ul className="mt-4">
            {taskList.map((task, index) => (
              <li
                className={`flex items-center justify-between border-b border-gray-500 py-2 ${task.completed ? 'line-through' : ''}`}
                key={index}
              >
                {task.label}
                <div className="flex gap-x-2">
                  <Button
                    onClick={() => handleCompleteTask(index)}
                    label="完了"
                    variant="secondary"
                  />
                  <Button
                    onClick={() => handleDeleteTask(index)}
                    label="削除"
                    variant="error-secondary"
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Page;
