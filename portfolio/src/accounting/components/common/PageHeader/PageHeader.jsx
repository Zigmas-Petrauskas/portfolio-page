import "./PageHeader.scss";

const PageHeader = ({ title, description, actions }) => {
  return (
    <header className="page-header">
      <div className="header-content">
        <h1>{title}</h1>

        {description && <p>{description}</p>}
      </div>

      {actions && <div className="header-actions">{actions}</div>}
    </header>
  );
};

export default PageHeader;
