<h2 dir="auto"><a id="user-content-установка" class="anchor" aria-hidden="true" href="#установка"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Установка</h2>
<p dir="auto">Для работы сборки вам понадобится скачать и установить <a href="https://nodejs.org" rel="nofollow">node.js</a>.</p>
<p dir="auto">Также установите систему контроля версии <a href="https://git-scm.com/downloads" rel="nofollow">Git</a>. Для работы сборки Git не обязателен, но для удобства установки и дальнейшей разработки лучше все же установить.</p>
<p dir="auto">Для установки (клонирования репозитория) в текущую папку из консоли введите команду: <code>git clone https://github.com/astepanov9/gulp-start.git .</code></p>
<blockquote>
<p dir="auto">Все команды пишутся от корня проекта!</p>
</blockquote>
<p dir="auto">После того как все исходники будут скачаны из удаленного репозитория, введите в консоли команду <code>npm install</code> для установки проекта. Все зависимости установятся автоматически.</p>
<p dir="auto">Во избежании всевозможных ошибок вам необходимо установить gulp глобально, но это в том случае если вы этого еще не делали в других проектах.</p>
<p dir="auto"><code>npm i gulp -g</code></p>
<p dir="auto">Эта процедура делается один раз и в следующий раз, когда будете разворачивать новый проект повторять эту команду не потребуется.</p>
<h2 dir="auto"><a id="user-content-запуск-и-основные-команды" class="anchor" aria-hidden="true" href="#запуск-и-основные-команды"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Запуск и основные команды</h2>
<p dir="auto">Когда все зависимости были установлены для запуска проекта достаточно в консоли написать команду <code>gulp</code>. Если нет ошибок, то в браузере по умолчанию откроется домен <a href="http://localhost:3000" rel="nofollow">http://localhost:3000</a> с уже включенным плагином "browser-sync" и функцией "watch".</p>
<p dir="auto"><code>ctrl + c</code> в консоли - остановка browser-sync</p>
<p dir="auto"><code>gulp build</code> перезаписывает папку dist из папки app, сжимает изображения.</p>
<h2 dir="auto"><a id="user-content-структура-файлов-проекта" class="anchor" aria-hidden="true" href="#структура-файлов-проекта"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Установленные плагины</h2>
<ul dir="auto">
<li>gulp-sass</li>
<li>gulp-concat</li>
<li>browser-sync</li>
<li>gulp-uglify-es</li>
<li>gulp-autoprefixer</li>
<li>gulp-imagemin</li>
<li>gulp del</li>
</ul>
