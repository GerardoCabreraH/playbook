import Repository from "./github/repository";
import Issue from "./github/issue";
import PullRequest from "./github/pull_request";

test('1) Crear un repositorio', () => {
    const primerRepositorio = new Repository('LaunchX', 'GerardoCabreraH', 'JavaScript', 100, 199, 299, 10, 10);
    expect(primerRepositorio.name).toBe('LaunchX');
    expect(primerRepositorio.author).toBe('GerardoCabreraH');
    expect(primerRepositorio.language).toBe('JavaScript');
    expect(primerRepositorio.numberOfCommits).toBe(100);
    expect(primerRepositorio.stars).toBe(199);
    expect(primerRepositorio.forks).toBe(299);
    expect(primerRepositorio.issues_open).toBe(10);
    expect(primerRepositorio.issues_close).toBe(10);
});

test('2) Crear un issue', () => {
    const primerIssue = new Issue('Dudas y preguntas del repositorio', 'LaunchX', 'Open', 50, 'documentation', 'GerardoCabreraH', '14-04-2022 08:27', '14-04-2022 13:27');
    expect(primerIssue.title).toBe('Dudas y preguntas del repositorio');
    expect(primerIssue.repositoryNameAssociated).toBe('LaunchX');
    expect(primerIssue.status).toBe('Open');
    expect(primerIssue.numberOfComments).toBe(50);
    expect(primerIssue.labels).toBe('documentation');
    expect(primerIssue.author).toBe('GerardoCabreraH');
    expect(primerIssue.dateCreated).toBe('14-04-2022 08:27');
    expect(primerIssue.lastUpdated).toBe('14-04-2022 13:27');
});

test('3) Crear un pull request', () => {
    const primerPullRequest = new PullRequest('Entrega de codigo', 'main', '14-04-2022 15:35', 'Open', 'LaunchX', 'GerardoCabreraH');
    expect(primerPullRequest.title).toBe('Entrega de codigo');
    expect(primerPullRequest.branchName).toBe('main');
    expect(primerPullRequest.dateCreated).toBe('14-04-2022 15:35');
    expect(primerPullRequest.status).toBe('Open');
    expect(primerPullRequest.repositoryNameAssociated).toBe('LaunchX');
    expect(primerPullRequest.author).toBe('GerardoCabreraH');
});
